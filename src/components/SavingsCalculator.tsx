
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calculator, DollarSign, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

const SavingsCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(52);
  const [caregiverRate, setCaregiverRate] = useState<number>(25);
  const [savings, setSavings] = useState({
    annual: 0,
    monthly: 0,
    weekly: 0
  });
  const [isCalculating, setIsCalculating] = useState(false);

  // TEACH1 training cost (estimated)
  const teach1Cost = 500; // One-time training cost

  useEffect(() => {
    const calculateSavings = () => {
      setIsCalculating(true);
      
      // Add a slight delay to show the calculating animation
      setTimeout(() => {
        const weeklyCareCost = hoursPerWeek * caregiverRate;
        const annualCareCost = weeklyCareCost * weeksPerYear;
        const monthlyCareCost = annualCareCost / 12;

        // Savings calculation (annual care cost minus TEACH1 training cost)
        const annualSavings = Math.max(0, annualCareCost - teach1Cost);
        const monthlySavings = annualSavings / 12;

        setSavings({
          annual: annualSavings,
          monthly: monthlySavings,
          weekly: weeklyCareCost
        });
        setIsCalculating(false);
      }, 300);
    };

    calculateSavings();
  }, [hoursPerWeek, weeksPerYear, caregiverRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="section bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 group">
            <div className="relative">
              <Calculator className="text-teach-blue mr-3 group-hover:scale-110 transition-transform duration-300" size={32} />
              <Sparkles className="absolute -top-1 -right-1 text-teach-orange animate-pulse" size={16} />
            </div>
            <h2 className="text-teach-blue bg-gradient-to-r from-teach-blue to-teach-blue-dark bg-clip-text text-transparent">
              Savings Calculator
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Discover how much you could save by training with TEACH1 instead of hiring professional caregivers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-teach-blue/20 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-teach-blue flex items-center">
                <TrendingUp className="mr-2 text-teach-orange animate-bounce" size={24} />
                Calculate Your Potential Savings
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="hoursPerWeek" className="block text-sm font-medium mb-2 group-hover:text-teach-blue transition-colors">
                    Hours of care needed per week
                  </label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    min="1"
                    max="168"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-teach-blue/50 focus:border-teach-blue hover:border-teach-orange/50"
                  />
                </div>

                <div className="group">
                  <label htmlFor="weeksPerYear" className="block text-sm font-medium mb-2 group-hover:text-teach-blue transition-colors">
                    Weeks per year requiring care
                  </label>
                  <Input
                    id="weeksPerYear"
                    type="number"
                    min="1"
                    max="52"
                    value={weeksPerYear}
                    onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-teach-blue/50 focus:border-teach-blue hover:border-teach-orange/50"
                  />
                </div>

                <div className="group">
                  <label htmlFor="caregiverRate" className="block text-sm font-medium mb-2 group-hover:text-teach-blue transition-colors">
                    Professional caregiver hourly rate ($)
                  </label>
                  <Input
                    id="caregiverRate"
                    type="number"
                    min="10"
                    max="100"
                    value={caregiverRate}
                    onChange={(e) => setCaregiverRate(Number(e.target.value))}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-teach-blue/50 focus:border-teach-blue hover:border-teach-orange/50"
                  />
                  <p className="text-sm text-teach-gray-dark mt-1">
                    Average rate: $20-30/hour
                  </p>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <Card className="p-6 bg-gradient-to-br from-teach-blue/5 to-teach-orange/5 hover:shadow-xl transition-all duration-300 border-2 hover:border-teach-orange/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-teach-blue flex items-center">
                <div className="relative mr-2">
                  <DollarSign className={`text-green-600 ${isCalculating ? 'animate-spin' : 'animate-pulse'}`} size={24} />
                  {savings.annual > 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  )}
                </div>
                Your Potential Savings
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className={`flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-teach-orange ${isCalculating ? 'animate-pulse' : 'hover:scale-105'}`}>
                  <div className="flex items-center">
                    <DollarSign className="text-teach-orange mr-2 animate-bounce" size={20} />
                    <span className="font-medium">Weekly care cost:</span>
                  </div>
                  <span className="text-lg font-bold text-teach-gray-dark">
                    {formatCurrency(savings.weekly)}
                  </span>
                </div>

                <div className={`flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-green-400 ${isCalculating ? 'animate-pulse' : 'hover:scale-105'}`}>
                  <div className="flex items-center">
                    <TrendingDown className="text-green-600 mr-2 animate-bounce" size={20} />
                    <span className="font-medium">Monthly savings:</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    {formatCurrency(savings.monthly)}
                  </span>
                </div>

                <div className={`flex justify-between items-center p-4 bg-gradient-to-r from-teach-blue to-teach-blue-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isCalculating ? 'animate-pulse' : 'hover:scale-105'}`}>
                  <div className="flex items-center">
                    <div className="relative mr-2">
                      <TrendingDown className="animate-bounce" size={20} />
                      {savings.annual > 10000 && (
                        <Sparkles className="absolute -top-1 -right-1 animate-pulse" size={12} />
                      )}
                    </div>
                    <span className="font-medium">Annual savings:</span>
                  </div>
                  <span className="text-2xl font-bold animate-pulse">
                    {formatCurrency(savings.annual)}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 bg-white/50 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm text-teach-gray-dark mb-2">
                  <strong className="text-teach-blue">TEACH1 one-time training cost:</strong> {formatCurrency(teach1Cost)}
                </p>
                <p className="text-sm text-teach-gray-dark">
                  Savings calculation includes the cost of TEACH1 training subtracted from professional caregiver costs.
                </p>
              </div>

              <div className="mt-6">
                <Button className="bg-gradient-to-r from-teach-blue to-teach-blue-dark hover:from-teach-blue-dark hover:to-teach-blue text-white w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Sparkles className="mr-2 animate-pulse" size={16} />
                  Start Saving with TEACH1
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-teach-gray-dark max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-teach-gray/20">
              *Calculations are estimates based on average market rates. Actual savings may vary depending on location, 
              specific care needs, and local caregiver rates. TEACH1 training provides long-term value through 
              improved caregiving skills and family empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
