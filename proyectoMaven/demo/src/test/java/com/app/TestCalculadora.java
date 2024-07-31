package com.app;

import junit.framework.TestCase;

public class TestCalculadora extends TestCase {
    private Calculadora calculadora;

    public static void main(String[] args) {
        junit.textui.TestRunner.run(TestCalculadora.class);
    }

    protected void setUp() {
        calculadora = new Calculadora();
    }

    public void testSumar() {
        assertTrue("No son iguales", 5 == calculadora.sumar(2, 3));
        
    }

    public void testRestar() {
        assertTrue("No son iguales", 5 == calculadora.restar(10, 5));
    }

    public void testMultiplicar() {
        assertTrue("No son iguales", 15 == calculadora.multiplicar(3, 5));
    }

    public void testDividir() {
        assertTrue("No son iguales", 2 == calculadora.dividir(10, 5));
    }
}