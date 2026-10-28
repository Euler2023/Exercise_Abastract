---
title: "Exercise LA612: A Polynomial for the Sum of a Square Root and a Cube Root of Unity"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.4, Exercise 6.4.2, printed p. 237, PDF p. 251"
source_refs:
  - "S7/ch-6/sec-4/ex-2"
created: 2026-10-28
---

# Exercise LA612: A Polynomial for the Sum of a Square Root and a Cube Root of Unity

## Problem Statement

> [!question] Original Exercise 6.4.2
> Use the methods of the section or of Exercise 6.4.1 to find a monic integer polynomial satisfied by $\sqrt2+\mu_3$.

## Hints

> [!hint]- Hint 1
> Put $x=\sqrt2+\omega$, where $\omega^2+\omega+1=0$. Expand $(x-\omega)^2=2$.

> [!hint]- Hint 2
> Obtain $x^2-3=(2x+1)\omega$, and eliminate $\omega$ without dividing by $2x+1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\omega=\mu_3=e^{2\pi i/3}$, so $\omega^2+\omega+1=0$, and let $\alpha=\sqrt2+\omega$. Since $(\alpha-\omega)^2=2$,
> $$
> \alpha^2-2\alpha\omega+\omega^2=2
> \quad\Longrightarrow\quad
> \alpha^2-3=(2\alpha+1)\omega.
> $$
> Write $A=\alpha^2-3$ and $B=2\alpha+1$. Multiplying $\omega^2+\omega+1=0$ by $B^2$ and using $A=B\omega$ gives
> $$
> A^2+AB+B^2=0.
> $$
> Expanding, without any division, yields
> $$
> \begin{aligned}
> 0&=(\alpha^2-3)^2+(\alpha^2-3)(2\alpha+1)+(2\alpha+1)^2\\
> &=\alpha^4+2\alpha^3-\alpha^2-2\alpha+7.
> \end{aligned}
> $$
> Thus a requested polynomial is $P(x)=x^4+2x^3-x^2-2x+7\in\mathbb Z[x]$. It is monic. As an independent algebraic check, its product description is
> $$
> P(x)=\bigl((x-\omega)^2-2\bigr)\bigl((x-\omega^2)^2-2\bigr),
> $$
> and the coefficients reduce to integers by $\omega+\omega^2=-1$ and $\omega\omega^2=1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Scope:** Finding an annihilating polynomial is the assigned task; irreducibility is not needed for this conclusion.
- **Routing:** Explicit polynomial elimination is the principal calculation.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
