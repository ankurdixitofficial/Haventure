'use client';

import { useState, useEffect } from 'react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateEMI = () => {
    // Convert interest rate from percentage to decimal and then to monthly
    const monthlyInterestRate = interestRate / 12 / 100;
    
    // Convert loan term from years to months
    const loanTermMonths = loanTerm * 12;
    
    // Calculate EMI using the formula: EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    const emiValue = loanAmount * monthlyInterestRate * 
      Math.pow(1 + monthlyInterestRate, loanTermMonths) / 
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
    
    setEmi(Math.round(emiValue));
    
    // Calculate total amount and interest
    const totalAmountValue = emiValue * loanTermMonths;
    setTotalAmount(Math.round(totalAmountValue));
    setTotalInterest(Math.round(totalAmountValue - loanAmount));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">EMI Calculator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Loan Amount: {formatCurrency(loanAmount)}
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>$100,000</span>
            <span>$10,000,000</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>5%</span>
            <span>20%</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Loan Term: {loanTerm} years
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>1 year</span>
            <span>30 years</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">Monthly EMI</p>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{formatCurrency(emi)}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">Total Interest</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-300">{formatCurrency(totalInterest)}</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">Total Amount</p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-300">{formatCurrency(totalAmount)}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is an approximate calculation. The actual EMI may vary based on the lender's terms and conditions.
        </p>
      </div>
    </div>
  );
} 