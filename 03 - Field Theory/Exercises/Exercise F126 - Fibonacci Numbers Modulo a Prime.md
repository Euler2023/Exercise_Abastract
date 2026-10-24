---
title: "Exercise F126: Fibonacci Numbers Modulo a Prime"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 8, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise F126: Fibonacci Numbers Modulo a Prime

## Problem Statement

> [!question] Neukirch I.8.8
> Let $a_n=\dfrac{\varepsilon^n-\varepsilon'^n}{\sqrt5}$, where $\varepsilon=\dfrac{1+\sqrt5}{2}$, $\varepsilon'=\dfrac{1-\sqrt5}{2}$ ($a_n$ is the $n$-th Fibonacci number). If $p$ is a prime number $\ne2,5$, then one has
> $$
> a_p\equiv\left(\frac p5\right)\pmod p.
> $$

## Hints

> [!hint]- Hint 1
> Both $\varepsilon$ and $\varepsilon'$ satisfy $X^2-X-1=0$. Derive the integer Fibonacci recurrence from the displayed formula.

> [!hint]- Hint 2
> Work in $\mathbb Z[\varepsilon]/p\mathbb Z[\varepsilon]$ and put $\delta=\varepsilon-\varepsilon'=\sqrt5$. Frobenius gives $\varepsilon^p-\varepsilon'^p=\delta^p$.

> [!hint]- Hint 3
> Since $\delta^2=5$ and $p\ne5$, divide by $\delta$, apply Euler's criterion to $5$, and use quadratic reciprocity to obtain the printed symbol $\left(\frac p5\right)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $B=\mathbb Z[\varepsilon]$. Since $\varepsilon^2=\varepsilon+1$ and $\varepsilon'=1-\varepsilon$ satisfies the same relation, the displayed sequence has $a_0=0$, $a_1=1$, and
> $$
> a_{n+2}=a_{n+1}+a_n.
> $$
> Thus all $a_n$ are integers. Also $B=\mathbb Z\oplus\mathbb Z\varepsilon$: the monic quadratic reduces all higher powers, and $1,\varepsilon$ are rationally independent.
>
> Reduce in the characteristic-$p$ ring $B/pB$, which need not be a field. The binomial theorem gives the Frobenius identity in any commutative ring of characteristic $p$. With $\delta=\varepsilon-\varepsilon'=\sqrt5$,
> $$
> \varepsilon^p-\varepsilon'^p=\delta^p,
> \qquad
> a_p\delta=\varepsilon^p-\varepsilon'^p.
> $$
> Since $\delta^2=5$ and $p\ne5$, $\delta$ is a unit in this quotient, with inverse $5^{-1}\delta$. Therefore
> $$
> a_p\equiv\delta^{p-1}=5^{(p-1)/2}\pmod{pB}.
> $$
> Euler's criterion identifies the right side with $\left(\frac5p\right)$. This is an integer congruence modulo $p$, not just modulo $pB$: the direct integer basis above gives $pB\cap\mathbb Z=p\mathbb Z$.
>
> Finally, quadratic reciprocity for the distinct odd primes $5,p$ has sign $(-1)^{2(p-1)/2}=1$. Hence
> $$
> \left(\frac5p\right)=\left(\frac p5\right),
> \qquad
> a_p\equiv\left(\frac p5\right)\pmod p.
> $$
> This is exactly the printed symbol orientation.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 8, printed p. 53, PDF p. 72]. No source figure is required.
- **Proof status and inputs:** The recurrence, quotient-ring Frobenius calculation, invertibility of $\delta$, and contraction of the congruence are independent derivations. Euler's criterion is on [S4, printed p. 50, PDF p. 69]; quadratic reciprocity is Theorem (8.6), printed p. 51 / PDF p. 70.
- **Boundary and routing:** The quadratic algebra modulo $p$ may split; no irreducibility assumption on $X^2-X-1$ is made. The prime $5$ is excluded where $\delta$ is inverted, and $2$ is excluded as in the source. Field Theory is primary because the proof uses conjugate quadratic generators and Frobenius; the printed symbol $(p/5)$ is retained rather than replaced silently by its equal reciprocal symbol.

