CREATE TABLE customer (
  cus_id VARCHAR(13) PRIMARY KEY DEFAULT AUTO_INCREMENT,
  cus_name VARCHAR(32),
  cus_addr VARCHAR(32)
);

CREATE TABLE orders (
  order_id VARCHAR(13) PRIMARY KEY DEFAULT AUTO_INCREMENT,
  order_date TIMESTAMP DEFAULT NOW(),
  cus_id VARCHAR(12),
  emp_id VARCHAR(13),
  FOREIGN KEY (cus_id) REFERENCES customer(cus_id),
  FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);

CREATE TABLE employee (
  emp_id VARCHAR(13) PRIMARY KEY DEFAULT AUTO_INCREMENT,
  emp_name VARCHAR(13),
  emp_addr VARCHAR(32),
  emp_salary INT(6),
  dep_name VARCHAR(13),
  FOREIGN KEY (dep_name) REFERENCES department(dep_name)
);

CREATE TABLE department (
  dep_name VARCHAR(13) PRIMARY KEY DEFAULT AUTO_INCREMENT,
  dep_budget INT(6)
);

CREATE TABLE orderItem (
  order_item_amount INT(6),
  order_item_discount INT(2),
  order_id VARCHAR(13),
  product_id VARCHAR(13)
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE product (
  product_id VARCHAR(13) PRIMARY KEY DEFAULT AUTO_INCREMENT,
  product_name VARCHAR(12),
  product_desc VARCHAR(32),
  product_price INT(6),
  product_quantity INT(3),
  FOREIGN KEY (sup_name) REFERENCES supplier(sup_name)
);

CREATE TABLE supplier (
  sup_name VARCHAR(32) NOT NULL PRIMARY KEY,
  sup_addr VARCHAR(32),
  sup_phone_number VARCHAR(12)
);