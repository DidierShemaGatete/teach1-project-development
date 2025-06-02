
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calculator, DollarSign, TrendingDown } from 'lucide-react';

const SavingsCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(52);
  const [caregiverRate, setCaregiverRate] = useState<number>(25);
  const [savings, setSavings] = useState({
    annual: 0,
    monthly: 0,
    weekly: 0
  });

  // TEACH1 training cost (estimated)
  const teach1Cost = 500; // One-time training cost

  useEffect(() => {
    const calculateSavings = () => {
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
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="text-teach-blue mr-3" size={32} />
            <h2 className="text-teach-blue">Savings Calculator</h2>
          </div>
          <p className="max-w-2xl mx-auto text-teach-gray-dark">
            Discover how much you could save by training with TEACH1 instead of hiring professional caregivers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 text-teach-blue">Calculate Your Potential Savings</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="hoursPerWeek" className="block text-sm font-medium mb-2">
                    Hours of care needed per week
                  </label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    min="1"
                    max="168"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="weeksPerYear" className="block text-sm font-medium mb-2">
                    Weeks per year requiring care
                  </label>
                  <Input
                    id="weeksPerYear"
                    type="number"
                    min="1"
                    max="52"
                    value={weeksPerYear}
                    onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="caregiverRate" className="block text-sm font-medium mb-2">
                    Professional caregiver hourly rate ($)
                  </label>
                  <Input
                    id="caregiverRate"
                    type="number"
                    min="10"
                    max="100"
                    value={caregiverRate}
                    onChange={(e) => setCaregiverRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-sm text-teach-gray-dark mt-1">
                    Average rate: $20-30/hour
                  </p>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <Card className="p-6 bg-teach-gray-light">
              <h3 className="text-xl font-bold mb-6 text-teach-blue">Your Potential Savings</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="text-teach-orange mr-2" size={20} />
                    <span className="font-medium">Weekly care cost:</span>
                  </div>
                  <span className="text-lg font-bold text-teach-gray-dark">
                    {formatCurrency(savings.weekly)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <TrendingDown className="text-green-600 mr-2" size={20} />
                    <span className="font-medium">Monthly savings:</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    {formatCurrency(savings.monthly)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-teach-blue text-white rounded-lg">
                  <div className="flex items-center">
                    <TrendingDown className="mr-2" size={20} />
                    <span className="font-medium">Annual savings:</span>
                  </div>
                  <span className="text-2xl font-bold">
                    {formatCurrency(savings.annual)}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-teach-gray-dark mb-2">
                  <strong>TEACH1 one-time training cost:</strong> {formatCurrency(teach1Cost)}
                </p>
                <p className="text-sm text-teach-gray-dark">
                  Savings calculation includes the cost of TEACH1 training subtracted from professional caregiver costs.
                </p>
              </div>

              <div className="mt-6">
                <Button className="bg-teach-blue hover:bg-teach-blue-dark text-white w-full">
                  Start Saving with TEACH1
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-teach-gray-dark max-w-2xl mx-auto">
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
