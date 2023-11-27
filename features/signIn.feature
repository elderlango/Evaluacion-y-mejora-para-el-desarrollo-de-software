Feature: Signin

  Scenario Outline: 1_2_3_4.-Signin with Credentials 

    Given I am on the signin page
    When I login with <fullname> and <email> and <phone> and <password> and <passwordcon> 
    Then I should see a flash message saying <message>
    Examples:
      | fullname | email             | phone      | password            | passwordcon         | message                   |
      | tomsmith | ejemp44@gmail.com | 0123456789 | SuperSecretPassword | SuperSecretPassword | ¡Cuenta creada con éxito! |
      |          |                   |            |                     |                     |                           |
      | foobar   | ejemp@gmail.com   | 9876543210 | barfoo              | barfoo              |                           |
      | pedro    | 4@c               | 4321       | UTD1                | UTD1                |                           |
   
  Scenario Outline: 5_6.-Login with valid Credentials 

    Given I am on the login page
    When I login with <email> and <password>
    Examples:
      | email   | password | 
      | d@d.com | 11111111 |
      | pedro   | caso4321 |


 Scenario Outline: 7.- Upload with Credentials 

    Given I am on the extrano page
   
  Scenario Outline: 8_12.- Upload with Credentials 

      Given I am on the home0 page
      When I input with <name> and <price> and <amount> and <desc> and <img> 
      Then I should see a flash message saying <message>
      Examples:
        | name | price | amount | desc | img                                                      | message                            |
        | pfp  | 100   | 20     | kkck | C:\\Users\\carol\\Documents\\Mig\\yo\\pfp\\prettyboy.png | Nuevo producto exitosamente creado |
        |      |        |       |      |                                                          |                                    |

  Scenario Outline: 9.- Delete Uploads 

      Given I am on the home1 page
      When I click
      Then I should see a flash message saying <message>
      Examples:
        | message                         |
        | Producto existosamente eliminado|

  Scenario Outline: 10.-Modify with Credentials 

      Given I am on the product page
      When I modify <name> and <price> and <amount> and <desc> and <img> 
      Then I should see a flash message saying <message>
      Examples:
        | name | price | amount | desc | img                                                      |message                           |
        | pfp  | 100   | 20     | kkck | C:\\Users\\carol\\Documents\\Mig\\yo\\pfp\\prettyboy.png |Producto exitosamente editado|

  Scenario Outline: 11.-Clone Uploads 

      Given I am on the home2 page
      When I click
      Then I should see a flash message saying <message>
      Examples:
        | message                            |
        | Nuevo producto exitosamente creado |

  Scenario Outline: 13.-Uploads message

      Given I am on the home3 page
      When I send msn
      Examples:
        | msn  |
        | hola |
  
  Scenario Outline: 14.- Order Content  

      Given I am on the home5 page
      When I click

   Scenario Outline: 15.- Search Content

      Given I am on the articulos page
      When I send cont
      Examples:
        | cont  |
        | hola |