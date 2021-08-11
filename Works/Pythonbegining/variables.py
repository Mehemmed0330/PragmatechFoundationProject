a = 10
b = 20
c = a+b
print(c)

a = 'Mehemmed'
b = ' Salam'
print(a+b)


a = "super"


def myfunc():
    x = 'oynamaq'
    print("Ela" + x)


myfunc()
print(a+'oynamaq')


def myfunc():
    global x
    x = "hi"


myfunc()
print(x+"there")
