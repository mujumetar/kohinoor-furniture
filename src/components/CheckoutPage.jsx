import React from 'react';
import { Download } from 'lucide-react';

const CheckoutPage = ({ orderDetails, downloadInvoice }) => (
  <div className="min-h-screen pt-24 pb-16 bg-gray-50">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {orderDetails ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
          <p className="text-gray-600 mb-4">Order ID: {orderDetails.id}</p>
          <button onClick={downloadInvoice} className="bg-amber-600 text-white px-6 py-3 rounded flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" /> Download Invoice
          </button>
        </div>
      ) : <p>No order found.</p>}
    </div>
  </div>
);

export default CheckoutPage;
