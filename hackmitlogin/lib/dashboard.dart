import 'package:flutter/material.dart';
import './config.dart';
import 'dart:html' as html;

class CrashList extends StatelessWidget {
  final Function cb;
  const CrashList({Key key, @required this.cb}) : super(key: key);
  void goToStoryBoard() {
    html.window.location.replace("/storyboard.html");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton.extended(
        onPressed: cb,
        label: Text("Go Back"),
        backgroundColor: Colors.orange[300],
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: GestureDetector(
                      onTap: goToStoryBoard,
                      child: Ink(
                        height: 8 * blocsizh,
                        width: 80 * blocsizw,
                        decoration: ShapeDecoration(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          color: Colors.blue,
                        ),
                        child: Center(
                          child: Text("Crash on 9/20/2020"),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
