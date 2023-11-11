export const sendEmail = async (to, cardId) => {
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject: 'Card Capacity Reached Zero',
        text: `Dear User, 

The capacity of your card with ID ${cardId} has reached zero. Please take necessary action.

Regards,
RideNow Team`,
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
      // Handle the error, for example, display a user-friendly message
      alert('Failed to send email. Please try again later.');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    // Handle the error, for example, display a user-friendly message
    alert('Error sending email. Please try again later.');
  }
};
