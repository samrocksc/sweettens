@app
myproj

@plugins
enhance/arc-plugin-enhance

@aws
runtime nodejs16.x

@create
autocreate true

@http
get /test
post /list
get /lists

@tables
lists
  listID *String
  userID String
  title String
  item1 String
  item2 String
  item3 String
  item4 String
  item5 String
  item6 String
  item7 String
  item8 String
  item9 String
  item10 String

@indexes
lists
  formState *String
  listID **String
  name byFormState

