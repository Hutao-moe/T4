# coding:gb2312
# wxApp.py
# author: aoogur
import os
import wx


class Frame(wx.Frame):
    def __init__(self):
        wx.Frame.__init__(self, None, -1, title="wxApp.", size=(250, 250), pos=(0, 0))


        mm = wx.DisplaySize()
        print("width=", mm[0])
        print('height=', mm[1])

class App(wx.App):
    def OnInit(self):
        frame = Frame()
        frame.Show(True)
        return True


if __name__ == "__main__":
    app = App(False)
    app.MainLoop()