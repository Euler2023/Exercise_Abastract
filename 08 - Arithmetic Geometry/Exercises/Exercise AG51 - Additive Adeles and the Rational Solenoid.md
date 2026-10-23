---
title: 'Exercise AG51: Additive Adeles and the Rational Solenoid'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 1, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-1
created: '2026-10-23'
---

# Exercise AG51: Additive Adeles and the Rational Solenoid

## Problem Statement

> [!question] Neukirch VI.1.1
> (i) $\mathbb A_{\mathbb Q}=(\widehat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q)\times\mathbb R$.
> (ii) The quotient group $\mathbb A_{\mathbb Q}/\mathbb Z$ is compact and connected.
> (iii) $\mathbb A_{\mathbb Q}/\mathbb Z$ is arbitrarily and uniquely divisible, i.e., the equation $nx=y$ has a unique solution, for every $n\in\mathbb N$ and $y\in\mathbb A_{\mathbb Q}/\mathbb Z$.

## Hints

> [!hint]- Hint 1 — first step
> Separate the finite adèle coordinates from the real coordinate and clear the finitely many finite denominators.

> [!hint]- Hint 2 — proof route
> (i) Clear the finitely many denominators of a finite adèle. For (ii)–(iii), first test the printed denominator on the class of $1/n$.

## Solution

> [!success]- Independent derivation
> **Source issue.** The denominator in (ii)–(iii) is printed as $\mathbb Z$, making those assertions false as written. The diagonal class $1/n+\mathbb Z$ is a nonzero element of order $n$, and projection to $\mathbb Q_p/\mathbb Z_p$ gives an infinite discrete quotient, so the quotient is neither compact nor connected. We prove the intended correction, $\mathbb A_{\mathbb Q}/\mathbb Q$, below.
> (i) A finite adèle $a=(a_p)$ has only finitely many nonintegral components, so a positive integer $d$ exists with $da\in\prod_p\mathbb Z_p=\widehat{\mathbb Z}$. Thus $\mathbb A_{\mathbb Q,f}=\bigcup_{d\ge1}d^{-1}\widehat{\mathbb Z}=\widehat{\mathbb Z}\otimes\mathbb Q$.
> The Chinese remainder theorem gives, for each finite adèle $a_f$, a rational number $q\in\mathbb Q$ such that $a_f-q\in\widehat{\mathbb Z}$. Any two such $q$ differ by an integer. Hence
> $$
> \mathbb A_{\mathbb Q}/\mathbb Q\cong(\widehat{\mathbb Z}\times\mathbb R)/\mathbb Z,
> $$
> where $\mathbb Z$ is embedded diagonally. Every class has a representative in $\widehat{\mathbb Z}\times[0,1]$, so the quotient is compact. The image of $\{0\}\times\mathbb R$ is connected and dense: for any $[x,t]$, choose integers $n_j\to-x$ in $\widehat{\mathbb Z}$. Then $[0,t+n_j]=[-n_j,t]\to[x,t]$. Thus the entire quotient is connected.
> For $y=[a]\in\mathbb A_{\mathbb Q}/\mathbb Q$, the class $x=[a/n]$ satisfies $nx=y$. If $nx=0$, a representative $b$ satisfies $nb=q\in\mathbb Q$, so $b=q/n$ is already a diagonal rational number and $x=0$. Multiplication by $n$ is therefore bijective.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adèles and Idèles]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]

## Notes

The statement was checked against the original pages rendered at 200 dpi. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 1, printed p. 367, PDF p. 386]. The solution is independently derived in this vault; citing an input does not mean that the book solves this exercise. The printed $\mathbb Z$ is preserved, and the solution explicitly replaces it by $\mathbb Q$. The original statement must not be marked unconditionally true.
