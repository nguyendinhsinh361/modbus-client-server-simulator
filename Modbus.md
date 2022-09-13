### Modbus
- Modbus là một chuẩn truyền thông công nghiệp được phát triển bởi Modicon(nay thuộc về Schneider) vào năm 1979 thay thế các chuẩn truyền thông truyền thống để truyền về PLC hoặc Scada. Cách hoạt động của modbus dựa trên nguyên tắc Master-Slave trên đường truyền RS232 và RS485

- Ứng dụng của Modbus RTU: Sử dụng chuẩn truyền thông Modbus RTU giúp kết nối tất cả các thiết bị.

- Với mỗi modbus slave tương ứng với một từ 4-8 tín hiệu Analog đầu vào hoặc nhiều hơn 10 Digital. Các tín hiệu mắc song song nhau truyền vào Gateway để truyền lên internet thông qua Modul R-key hoặc Z-key.

# Modbus hoạt động như thế nào:
- Modbus RTU hoạt động dựa trên nguyên tắc Master-Slave tức là một bên nhận(Master) và một bên truyền tín hiệu(Slave) thông qua địa chỉ thanh ghi. Phương thức truyền của Modbus RTU bằng đường truyền vật lí RS232 và RS485. Modbus TCP/IP thì truyền trên địa chỉ IT thông qua Internet.

- Bộ chuyển đổi Z-8AI nhận 8 tín hiệu analog dạng 4-20mA hoặc 0-10V chuyển sang Modbus RTU 2 dây trên nền tảng RSS485 thông qua hệ Hexadecimal.

# Dữ liệu được truyền trên Modbus như thế nào ?
- Dữ liệu được lưu trữ trong Slave trong 4 bảng khác nhau với hai bảng lưu trữ ON/OFF các giá trị Coil và hai thành lưu trữ. Các thanh ghi này đều có khả năng đọc và ghi. Mỗi thanh ghi có 1 Word = 16 Bit = 2 bytes có địa chỉ từ 0000-260E. Coil được xem như là địa chỉ của thanh ghi . Ví dụ 400001 có địa chỉ dữ liệu là 0000, các giá trị này có thể lệch nhau 1, 100001, 300001, 400001.

# RS232 là gì ?
- RS232 còn được gọi là cổng COM thường được thấy trong các máy tính bàn và tất cả đều có cổng truyền thông theo chuẩn RS232 để giao tiếp với các thiết bị khác như máy in, máy fax, ... 
# RS484 là gì ?
- Chuẩn RS485 chỉ truyền trên 2 dây A và B sử dụng sự chênh lệch áp giữa A và B theo logic 0 hoặc 1 chứ không hề so sánh với đất. Điều này đảm bảo tín hiệu truyền đi xa bởi nếu có trường hợp sụt áp thì đồng thời hai dây đều sụt áp nên tín hiệu vẫn đảm bảo logic 1 hoặc 0

# Bản chất của tín hiệu Modbus RTU:
- Hiểu được bản chất truyền tín hiệu của Modbus RTU giúp kết nối các tín hiệu chuẩn Modbus một cách chính xác nhất. Tất cả các tín hiệu chuẩn Modbus RTU được măc song song nhau trên hai dây truyền về Master qua chuẩn RS485

# Modbus Slave:
- Modbus slave dùng để mô phỏng lên đến 100 thiết bị nô lệ trong 100 cửa sổ. Tăng tốc độ lập trình PLC của bạn với các công cụ mô phỏng này. Bắt đầu lập trình và kiểm tra trước khi bạn nhận được thiết bị phụ từ nhà cung cấp. Ứng dụng chính vó thể truy cập dữ liệu chứa trong bất kì tài liệu nào. Giao diện người dùng tương tự như Modubus Poll
