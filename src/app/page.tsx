'use client'
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function Home() {
  useEffect(() => {
      const initializeOneSignal = async () => {
          if (typeof window !== 'undefined') {
              try {
                  // Initialize OneSignal
                  await OneSignal.init({
                      appId: '56c1e86a-3c59-44db-a2cf-716c701dead5',
                      notifyButton: {
                          enable: true,
                      },
                  });
                  console.log('OneSignal initialized');

                  // Login the user with an external ID
                  await OneSignal.login('d6c9643c-0f3e-4a5f-80e7-067e518f440e');
                  console.log('User logged in to OneSignal');
              } catch (error) {
                  console.error('Error initializing or logging in OneSignal:', error);
              }
          }
      };

      initializeOneSignal();
  }, []);

  return (
      <div>
          <h1>Hello, world!</h1>
          {/* Rest of your page content */}
      </div>
  );
}
