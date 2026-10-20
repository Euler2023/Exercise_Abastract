---
title: "Exercise R372: A Seven-adic Square Root of Two"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Exercise 3, printed p. 106, PDF p. 125"
created: 2026-10-20
---

# Exercise R372: A Seven-adic Square Root of Two

## Problem Statement

> [!question] Neukirch II.1.3
> Show that the equation $x^2=2$ has a solution in $\mathbb Z_7$.

## Hints

> [!hint]- Hint 1: Start with a root modulo seven
> Both $3$ and $4$ square to $2$ modulo $7$. Fix the branch starting with $3$.

> [!hint]- Hint 2: Correct one digit at a time
> If $r_n^2-2=k_n7^n$, seek $r_{n+1}=r_n+t_n7^n$. Modulo $7^{n+1}$ the correction condition is $k_n+2r_nt_n\equiv0\pmod7$.

> [!hint]- Hint 3: Keep the roots compatible
> The coefficient $2r_n\equiv6\pmod7$ is invertible. Thus the next digit is unique; the compatible roots define an element of $\mathbb Z_7$ whose square is $2$ in every quotient.

## Solution

> [!success]- Independent derivation
> We construct compatible roots modulo $7^n$ directly, rather than assuming Hensel's lemma.
>
> Start with $r_1=3$. Suppose $0\le r_n<7^n$ and $r_n^2\equiv2\pmod{7^n}$, with $r_n\equiv3\pmod7$. Set
> $$
> k_n=\frac{r_n^2-2}{7^n}\in\mathbb Z.
> $$
> For $t\in\{0,\ldots,6\}$, expansion gives
> $$
> (r_n+t7^n)^2-2
> =7^n\bigl(k_n+2r_nt+t^2 7^n\bigr).
> $$
> Consequently $r_n+t7^n$ is a root modulo $7^{n+1}$ exactly when $k_n+2r_nt\equiv0\pmod7$. Since $2r_n\equiv6\pmod7$ and $6^{-1}\equiv6\pmod7$, there is a unique such digit
> $$
> t_n\equiv-6k_n\pmod7,\qquad0\le t_n<7.
> $$
> Define $r_{n+1}=r_n+t_n7^n$. This remains in $[0,7^{n+1})$, is congruent to $r_n$ modulo $7^n$, and squares to $2$ modulo $7^{n+1}$. Induction therefore constructs the sequence for every $n$.
>
> By the inverse-limit description of $\mathbb Z_7$, the compatible classes $r_n\bmod7^n$ determine $x\in\mathbb Z_7$. For every $n$, the residue of $x^2-2$ modulo $7^n$ is zero. An element of the inverse limit whose every component is zero is itself zero, so $x^2=2$.
>
> The first stages are
>
> | $n$ | $r_n$ | $k_n=(r_n^2-2)/7^n$ | Next digit $t_n$ |
> |---|---|---|---|
> | $1$ | $3$ | $1$ | $1$ |
> | $2$ | $10$ | $2$ | $2$ |
> | $3$ | $108$ | $34$ | $6$ |
> | $4$ | $2166$ | $1954$ | $1$ |
>
> Thus this square root begins
> $$
> x=3+7+2\cdot7^2+6\cdot7^3+7^4+\cdots.
> $$
> The displayed finite string alone is not an exact square root; the construction proves that it extends to one. The other branch begins with $4$ and is $-x$: any root modulo $7$ is $3$ or $4$, and for either branch the same invertible-coefficient argument gives a unique next digit at every step. Hence these are exactly the two roots in $\mathbb Z_7$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source verification:** The entire numbered exercise was visually checked at [S4, Ch. II, §1, Exercise 3, printed p. 106, PDF p. 125]. The §2 body heading below the sixth exercise confirms the end of this group. No source figure is required.
- **Proof inputs:** The compatible-residue construction of $\mathbb Z_7$ is Proposition (1.3), printed pp. 103–104 / PDF pp. 122–123. Proposition (1.4), printed pp. 105–106 / PDF pp. 124–125, also relates congruence solutions to $p$-adic solutions, but the proof here constructs compatibility explicitly and needs no subsequence argument.
- **Proof scope:** This is an independent simple-root lifting proof. The general Hensel lemma in the linked concept is a related theorem, not a theorem silently used to solve this earlier exercise.
- **Computational check:** Exact integer arithmetic recomputed the four displayed lifting stages. This finite check verifies the table; the induction and inverse-limit argument prove existence of the full root.
- **Routing:** Ring Theory is primary because polynomial congruences and successive residue-ring corrections construct the solution. No extension-degree calculation is required.
