---
title: "Exercise R367: Fundamental Units in a Biquadratic Order"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §12, Exercise 2, printed p. 84, PDF p. 103"
created: 2026-10-20
---

# Exercise R367: Fundamental Units in a Biquadratic Order

## Problem Statement

> [!question] Neukirch I.12.2
> Let $a$ and $b$ be positive integers that are not perfect squares. Show that the fundamental unit of the order $\mathbb Z+\mathbb Z\sqrt a$ of the field $\mathbb Q(\sqrt a)$ is also the fundamental unit of the order $\mathbb Z+\mathbb Z\sqrt a+\mathbb Z\sqrt{-b}+\mathbb Z\sqrt a\sqrt{-b}$ in the field $\mathbb Q(\sqrt a,\sqrt{-b})$.

## Hints

> [!hint]- Hint 1: Compare a unit with its conjugate
> Let $c$ be complex conjugation. If $u$ is a unit of the larger order, $v=u/c(u)$ is again a unit in that order, and all four conjugates of $v$ have absolute value one.

> [!hint]- Hint 2: Average the squared absolute values
> For $v=x+y\sqrt a+(z+w\sqrt a)\sqrt{-b}$, the average is $x^2+ay^2+bz^2+abw^2$. Since $a,b\ge2$, an average equal to one forces $v=\pm1$.

> [!hint]- Hint 3: Exclude purely imaginary units
> If $u=-c(u)$, write $u=\sqrt{-b}(z+w\sqrt a)$. Its absolute field norm is $b^2(z^2-aw^2)^2>1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> Set $A=\mathbb Z[\sqrt a]$, $B=A[\sqrt{-b}]$, and $L=\mathbb Q(\sqrt a,\sqrt{-b})$. The real and imaginary quadratic fields are distinct, and their intersection is $\mathbb Q$, so $[L:\mathbb Q]=4$. Thus $1,\sqrt a,\sqrt{-b},\sqrt a\sqrt{-b}$ is a rational basis and the displayed integer expression for each element of $B$ is unique. We prove the stronger identity $B^\times=A^\times$.
>
> Let $u\in B^\times$ and let $c$ be complex conjugation. It preserves $B$ and its units. Hence $v=u/c(u)\in B^\times$. Every embedding $\sigma:L\hookrightarrow\mathbb C$ commutes with complex conjugation on this biquadratic field: it independently changes the signs of the two square roots. Therefore $\sigma(c(u))=\overline{\sigma(u)}$, and $|\sigma(v)|=1$ for all four embeddings.
>
> Write $v=x+y\sqrt a+(z+w\sqrt a)\sqrt{-b}$ with integers $x,y,z,w$. For each choice $\delta=\pm1$ of the real square root, its squared complex modulus is
> $$
> (x+\delta y\sqrt a)^2+b(z+\delta w\sqrt a)^2.
> $$
> Averaging over all four embeddings cancels the terms odd in $\delta$ and gives
> $$
> 1=\frac14\sum_\sigma|\sigma(v)|^2
> =x^2+ay^2+bz^2+abw^2.
> $$
> As $a,b\ge2$, all terms are nonnegative integers and any nonzero $y,z,w$ would contribute at least two. Thus $y=z=w=0$ and $x=\pm1$, so $v=\pm1$.
>
> If $v=1$, then $u=c(u)$ and the uniqueness of coordinates gives $u\in A$. Its inverse is also fixed by $c$, so $u^{-1}\in A$ and $u\in A^\times$. If $v=-1$, then $u=-c(u)$ and $u=\sqrt{-b}(z+w\sqrt a)$. Its norm satisfies
> $$
> |N_{L/\mathbb Q}(u)|=b^2(z^2-aw^2)^2.
> $$
> The integer $z^2-aw^2$ is nonzero: otherwise $u=0$ or $a$ would be a rational square. Thus this norm is at least $b^2\ge4$. But a unit and its inverse are algebraic integers, so their rational integer norms multiply to one; a unit's absolute norm must be one. This is a contradiction.
>
> We have proved $B^\times\subseteq A^\times$; the reverse inclusion holds because an inverse already in $A$ also lies in $B$. Thus $B^\times=A^\times$. The only roots of unity in a real quadratic field are $\pm1$, and these are now also the only roots of unity in $B$. Consequently a positive fundamental unit $\varepsilon>1$ with $A^\times=\{\pm\varepsilon^k:k\in\mathbb Z\}$ gives the identical description for $B^\times$. This proves the exercise for the stated orders, without replacing them by maximal integer rings.

## Related Concepts

- [[02 - Ring Theory/Concepts/Orders and Conductors|Integral Orders]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Fundamental Units]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Fields]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §12, Exercise 2, printed p. 84, PDF p. 103]. No source figure is required.
- **Proof status:** The unit-group identity and its positive sum-of-squares obstruction are independent derivations. The elementary inputs are the four embeddings of the biquadratic field and integrality of the field norm of an algebraic integer. Existence and the meaning of the given real-quadratic fundamental unit are the standard quadratic-unit input; no unproved assertion about units of a maximal CM order is used.
- **Scope:** The result is about exactly the displayed orders. Extra units or roots of unity in the full ring of integers of $L$ are irrelevant and have not been excluded by an unsupported general CM claim.
- **Routing:** Units, conjugation, and integer norms in explicit orders supply the argument.
