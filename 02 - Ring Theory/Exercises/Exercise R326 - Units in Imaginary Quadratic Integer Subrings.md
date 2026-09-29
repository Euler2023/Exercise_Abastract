---
title: "Exercise R326: Units in Imaginary Quadratic Integer Subrings"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 5, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R326: Units in Imaginary Quadratic Integer Subrings

## Problem Statement

> [!question] Neukirch I.1.5
> Show that the only units of the ring $\mathbb Z[\sqrt{-d}]=\mathbb Z+\mathbb Z\sqrt{-d}$, for any rational integer $d>1$, are $\pm1$.

## Hints

> [!hint]- Hint 1
> For $\alpha=a+b\sqrt{-d}$, use the positive integer norm $N(\alpha)=a^2+db^2$.

> [!hint]- Hint 2
> A unit has norm $1$. When $d>1$, a nonzero $b$ makes $a^2+db^2$ too large.

## Solution

> [!success]- Independent derivation
> Let $R=\mathbb Z[\sqrt{-d}]$, where $d$ is any integer greater than $1$. Complex conjugation maps $R$ to itself and sends $a+b\sqrt{-d}$ to $a-b\sqrt{-d}$. Define
> $$
> N(a+b\sqrt{-d})=(a+b\sqrt{-d})(a-b\sqrt{-d})=a^2+db^2.
> $$
> This is a nonnegative integer, positive for every nonzero element of $R$. Conjugation is multiplicative, so $N(\alpha\beta)=N(\alpha)N(\beta)$.
>
> If $\alpha$ is a unit, choose $\beta\in R$ with $\alpha\beta=1$. Positivity and integrality of their norms imply
> $$
> N(\alpha)N(\beta)=1,\qquad N(\alpha)=1.
> $$
> Writing $\alpha=a+b\sqrt{-d}$, this becomes $a^2+db^2=1$. If $b\ne0$, then $db^2\ge d>1$, which is impossible. Hence $b=0$ and $a=\pm1$.
>
> Conversely, $1$ and $-1$ are units, each its own inverse. Therefore $R^\times=\{1,-1\}$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition]]
- [[02 - Ring Theory/Concepts/Subrings]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Exercises/Exercise R322 - The Norm Criterion for Gaussian Units]]

## Notes

- **Source status:** [S4, Ch. I, §1, Ex. 5, printed p. 5, PDF p. 24]. The original page image was checked; the proof above is an independent norm argument.
- **Hypotheses:** No squarefree assumption is needed or added. The statement applies to the specified subring $\mathbb Z[\sqrt{-d}]$ for every integer $d>1$.
- **Ring boundary:** The specified ring need not be the full ring of integers of $\mathbb Q(\sqrt{-d})$. For example, $\omega=(-1+\sqrt{-3})/2$ is an algebraic integer satisfying $\omega^2+\omega+1=0$ and is a unit since $\omega^3=1$, but $\omega\notin\mathbb Z[\sqrt{-3}]$. Thus one must not silently replace the ring in the problem by the full ring of integers.
- **Endpoint:** When $d=1$, the additional Gaussian units $\pm i$ occur, as proved in Exercise I.1.1.
- **Routing:** Units are determined by a positive definite multiplicative norm in a concrete ring.
