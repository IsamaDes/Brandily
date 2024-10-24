import React, { useState, useEffect } from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../UI/Card';
import Alert, { AlertDescription } from '../UI/Alert';
import { 
  Thermometer, 
  Clock, 
  MapPin, 
  AlertCircle, 
  Droplets, 
  Wind, 
  Cloud 
} from 'lucide-react';

interface WeatherData {
  temperature: number | null;
  city: string;
  description: string;
  humidity: number | null;
  windSpeed: number | null;
}

interface WeatherDashboardProps {
  token: string;
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ token }) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: null,
    city: '',
    description: '',
    humidity: null,
    windSpeed: null,
  });
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/weather', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Unable to load weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Fetch weather data every 5 minutes
    fetchWeatherData();
    const weatherInterval = setInterval(fetchWeatherData, 300000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, [token]);

  if (error) {
    return (
      <Alert variant ="destructive" className="max-w-md mx-auto mt-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
          <CardTitle className="text-2xl font-bold text-white">Weather Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center py-4">Loading weather data...</div>
          ) : (
            <div className="space-y-6">
              {/* City and Time Section */}
              <div className="border-b pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span className="text-xl font-semibold">{weatherData.city}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="text-lg">{currentTime.toLocaleTimeString()}</span>
                    <span className="text-sm">{currentTime.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Weather Info Section */}
              <div className="grid grid-cols-2 gap-4">
                {/* Temperature */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Thermometer className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600">Temperature</span>
                  </div>
                  <span className="text-2xl font-bold">
                    {weatherData.temperature !== null ? `${weatherData.temperature}°C` : 'N/A'}
                  </span>
                </div>

                {/* Description */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Cloud className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">Condition</span>
                  </div>
                  <span className="text-lg capitalize">
                    {weatherData.description || 'N/A'}
                  </span>
                </div>

                {/* Humidity */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Droplets className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-600">Humidity</span>
                  </div>
                  <span className="text-lg">
                    {weatherData.humidity !== null ? `${weatherData.humidity}%` : 'N/A'}
                  </span>
                </div>

                {/* Wind Speed */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Wind className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">Wind</span>
                  </div>
                  <span className="text-lg">
                    {weatherData.windSpeed !== null ? `${weatherData.windSpeed} m/s` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherDashboard;
