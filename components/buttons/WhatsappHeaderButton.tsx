'use client'

const WhatsappHeaderButton = () => {



    const sendWhatsAppMessage = () => {

        const phoneNumber = '972506860169';
        const message = 'היי אריק. אשמח להתייעץ איתך לגבי קעקוע או פירסינג';
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    }


  return (
      <button onClick={sendWhatsAppMessage}
      className="text-center hover:bg-amber-400 cursor-pointer border-4 w-3/4 sm:w-60 border-amber-400 p-1 text-xl font-semibold flex items-center justify-center h-full"
      >
          קביעת פגישה
    </button>
  )
}

export default WhatsappHeaderButton