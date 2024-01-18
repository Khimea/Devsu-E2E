Feature: Devsu E2E

  Scenario: Escenario 1
    Given Dirigirse a demoblaze website
    When Seleccionar producto Samsung galaxy s7
    And Añadir producto al carro
    And Volver al home
    And Seleccionar producto Sony xperia z5
    And Añadir producto al carro
    And Visualizar carrito
    And Crear orden de compra
    And Completar formulario con JSON dataOrder
    And Comprar orden
    Then Compra exitosa
  Scenario: Escenario 2
    Given Dirigirse a demoblaze website
    When Seleccionar producto <producto1>
    And Añadir producto al carro
    And Volver al home
    And Seleccionar producto <producto2>
    And Añadir producto al carro
    And Visualizar carrito
    And Crear orden de compra
    And Completar formulario con JSON dataOrder
    And Comprar orden
    Then Compra exitosa
    Examples:
      | producto1         | producto2      |
      | Samsung galaxy s7 | Sony xperia z5 |
      | Nokia lumia 1520  | Sony vaio i7   |
  Scenario: Escenario 3
    Given Dirigirse a demoblaze website
    When Seleccionar menu log in
    And Logeamos con Username: standard_user y password: secret_sauce
    And Seleccionar producto Samsung galaxy s7
    And Añadir producto al carro
    And Volver al home
    And Seleccionar producto Sony xperia z5
    And Añadir producto al carro
    And Visualizar carrito
    And Crear orden de compra
    And Completar formulario con JSON dataOrder
    And Comprar orden
    Then Compra exitosa
  Scenario: Escenario 4
    Given Dirigirse a demoblaze website
    When Seleccionar menu log in
    And Logeamos con Username: <Username> y password: <password>
    And Seleccionar producto Samsung galaxy s7
    And Añadir producto al carro
    And Volver al home
    And Seleccionar producto Sony xperia z5
    And Añadir producto al carro
    And Visualizar carrito
    And Crear orden de compra
    And Completar formulario con JSON dataOrder
    And Comprar orden
    Then Compra exitosa
    Examples:
      | Username      | password     |
      | standard_user | secret_sauce |
  Scenario: Escenario 5
    Given Dirigirse a demoblaze website
    When Seleccionar menu log in
    And Logeamos con Username: <Username> y password: <password>
    And Seleccionar producto <producto1>
    And Añadir producto al carro
    And Volver al home
    And Seleccionar producto <producto2>
    And Añadir producto al carro
    And Visualizar carrito
    And Crear orden de compra
    And Completar formulario con JSON dataOrder
    And Comprar orden
    Then Compra exitosa
    Examples:
      | Username      | password     | producto1         | producto2      |
      | standard_user | secret_sauce | Samsung galaxy s7 | Sony xperia z5 |
      | standard_user | secret_sauce | Nokia lumia 1520  | Sony vaio i7   |
