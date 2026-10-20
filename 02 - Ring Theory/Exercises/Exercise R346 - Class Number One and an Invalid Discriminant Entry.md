---
title: "Exercise R346: Class Number One and an Invalid Discriminant Entry"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, Exercise 2, printed p. 38, PDF p. 57"
created: 2026-10-20
---

# Exercise R346: Class Number One and an Invalid Discriminant Entry

## Problem Statement

> [!question] Neukirch I.6.2
> Show that the quadratic fields with discriminant $5,8,11,-3,-4,-7,-8,-11$ have class number $1$.

> [!warning] Source wording and scope
> The original includes positive $11$. A quadratic-field discriminant must be $0$ or $1$ modulo $4$, so there is no field for that entry. The solution proves class number one for the other seven discriminants. It preserves the source list and does not guess which replacement the author intended.

## Hints

> [!hint]- Hint 1: Check the discriminants first
> A quadratic-field discriminant is congruent to $0$ or $1$ modulo $4$. Inspect the positive entry $11$ before interpreting the list.

> [!hint]- Hint 2: Use small ideal-class representatives
> In degree two the Minkowski representative bound is $\sqrt D/2$ for positive discriminant and $2\sqrt{|D|}/\pi$ for negative discriminant. All valid listed cases except $D=-11$ have bound less than $2$.

> [!hint]- Hint 3: Exclude norm two in the remaining case
> For $D=-11$, use $\theta=(1+\sqrt{-11})/2$ with $\theta^2-\theta+3=0$. This polynomial has no root in $\mathbb F_2$.

## Solution

> [!success]- Independent derivation
>
> ### 1. Identify the source issue
> For a quadratic field $\mathbb Q(\sqrt d)$ with squarefree $d\ne1$, its discriminant is $d$ if $d\equiv1\pmod4$ and $4d$ otherwise. In particular it is $0$ or $1$ modulo $4$. Since $11\equiv3\pmod4$, no quadratic field has discriminant $11$. We prove the claim for the seven valid entries without assigning a field to that impossible entry.
>
> ### 2. Apply the representative bound
> Write $D$ for the field discriminant. The independently proved Minkowski ideal-class bound gives a nonzero integral representative of each class with norm at most
> $$
> B_D=\begin{cases}\sqrt D/2,&D>0,\\2\sqrt{|D|}/\pi,&D<0.\end{cases}
> $$
> This is Exercise I.6.3, proved independently using I.5.3; it does not assume any of the class-number assertions here. For $D=5,8$, one has $B_D<2$ because $D<16$. For $D=-3,-4,-7,-8$, one also has $B_D<2$: use $\pi>3>\sqrt8\ge\sqrt{|D|}$. An integral ideal has positive integer norm, so in all six cases every class has a norm-one representative. Such an ideal equals $\mathcal O_K$, since its additive index is one. Hence each class group is trivial.
>
> ### 3. Treat discriminant $-11$
> Here $B_{-11}=2\sqrt{11}/\pi<3$ (already $2\sqrt{11}<9<3\pi$). Thus every class has an ideal of norm $1$ or $2$. The integer-ring formula gives
> $$
> \mathcal O_K=\mathbb Z[\theta],\qquad
> \theta=\frac{1+\sqrt{-11}}2,\qquad \theta^2-\theta+3=0.
> $$
> If an ideal $\mathfrak a$ had norm $2$, its quotient would be the two-element field. The image of $\theta$ would then be a root of $T^2+T+1$ in $\mathbb F_2$. Its values at $0$ and $1$ are both $1$, a contradiction. Therefore norm $2$ is impossible. Again each ideal class has the norm-one representative $\mathcal O_K$ and is trivial.
>
> The valid discriminants correspond respectively to $\mathbb Q(\sqrt5)$, $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt{-3})$, $\mathbb Q(i)$, $\mathbb Q(\sqrt{-7})$, $\mathbb Q(\sqrt{-2})$, and $\mathbb Q(\sqrt{-11})$, and all seven have class number one.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Integer Rings]]
- [[02 - Ring Theory/Exercises/Exercise R347 - The Minkowski Bound for Ideal Class Representatives|The Minkowski Ideal-Class Bound]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §6, Exercise 2, printed p. 38, PDF p. 57]. No source figure is required.
- **Source issue:** The original image unmistakably prints positive $11$. This is an impossible discriminant entry, rather than a verified statement about $\mathbb Q(\sqrt{11})$ (whose discriminant is $44$). No silent replacement by $12$ or $44$ has been made.
- **Inputs and proof status:** The quadratic integer-ring/discriminant formula is the input from [S4, Ch. I, §2, Exercise 4, printed p. 15, PDF p. 34], independently proved in the linked existing quadratic notes. The representative bound is derived in I.6.3 from [S4, Ch. I, §5, Exercise 3, printed p. 34, PDF p. 53]. All small-norm exclusions are proved here; a class-number table is not imported.
- **Routing:** The work computes ideal-class representatives and excludes small quotient ideals, so Ring Theory is primary.
