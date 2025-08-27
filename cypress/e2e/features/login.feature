

Feature: Realizar login com sucesso


  Scenario: Realizar login com sucesso
    Given que acesso o site QA Pratice
    When eu preencho os dados Email e Password
    And eu clico no botão login
    Then deve ser possivel realizar login com sucesso

