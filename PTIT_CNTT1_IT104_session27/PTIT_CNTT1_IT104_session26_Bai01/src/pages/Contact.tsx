function Contact() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Liên hệ</h1>
      <p>
        <strong>Email:</strong> nguyenvana@gmail.com
      </p>
      <p>
        <strong>Số điện thoại:</strong> 0123-456-789
      </p>
      <p>
        <strong>Facebook:</strong>{" "}
        <a
          href="https://facebook.com/example"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          facebook.com/example
        </a>
      </p>
    </div>
  );
}

export default Contact;
