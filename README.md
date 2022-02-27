# MicroFrontEnd
Udemy course: "Build incredibly scalable apps with a microfrontend architecture."

## Concept (check if it is right)
Get the major features and split them into their on separeted codebase
Basically separate features into different projects


(CREATE TABLE)
	Major Feature #1			Major Feature #2
	> API FOR RETRIEVING		> API FOR MANAGING
	> API FOR MANAGING

> Benefits
	> Separate independent apps
	> Each smaller apps is responsible for a distinct feature of the product

> Why?
	> Multiple engineering teams can work in isolation
	> Each smaller apps is easier to understand and make changes to



--------------------------------------
(All mocked data)
# First project

  E-Commerce Store

    Products for sale
      Itens
    Cart
      List itens in the cart if any

    2 Main features
      Products for sale
      Cart

    Connect MicrofrontEnds through a container
      Container decides when and where to show each one

    Types of integration
      Build-Time Integration
        Compile-Time
      Run-Time Integration (Used)
        Client-Side
      Server Integration

--------------------------------------
## On Product
```npm install webpack@5.68.0 webpack-cli@4.9.2 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0```

## On Container
```npm install webpack@5.68.0 webpack-cli@4.9.2 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon```