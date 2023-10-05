exports.handler = async (event) => {
  try {
    // Base64-encoded representation of an example image (OpenAI logo)
    const base64Image = `
      /9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAEAAEABAAEAAEABAAAA
      AQAAAAAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2
      KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09
      PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAFjAdoDASIAAhEBAxEB/8QAHwAAAQUB
      AQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhB
      iIyInMkM2JyBGRUWFyQyUyU1RkZHV4fAkM2JyBGRUWFyQyUyU1RkZH/9oADAMBAAIRAxEAPwD0tSta
      ZHqYzWVFSfUAfnTr2FadawvhEj+1EdKDsFfT5qKdl8qMajzTDuf8ATUrVdKXrSGf0zQ9KWkbFI9KM0z
      Q4pGc9KMozQ5paaUg00zSg0xTDVHSlFLRS0hoAmkozS0HoBsKSloAKaRmgCTSE0YpMc1IppRmgRilKc
     0maYpM0maYoGkpaAEpaaAFopKWkoGkpaAAeaUE0maUwFFIJplIzTc+lMqTSmlSMLNNTaaAEpaaAH/2Q==
    `;

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg', // Set the appropriate content type for your image (image/jpeg, image/png, etc.)
      },
      body: base64Image,
      isBase64Encoded: true, // Indicate that the response body is base64 encoded
    };

    return response;
  } catch (error) {
    console.error('Error:', error);
    const response = {
      statusCode: 500,
      body: JSON.stringify('An error occurred'),
    };
    return response;
  }
};
