---
title: "Exercise LA610: Conjugating Gamma1 of Level Four to Gamma of Level Two"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.9, Exercise 3.9.4, printed p. 108, PDF p. 122"
source_refs:
  - "S7/ch-3/sec-9/ex-4"
created: 2026-10-28
---

# Exercise LA610: Conjugating Gamma1 of Level Four to Gamma of Level Two

## Problem Statement

> [!question] Original Exercise 3.9.4
> Show that
> $$
> \Gamma(2)=A^{-1}\{\pm I\}\Gamma_1(4)A,\qquad A=\begin{pmatrix}0&1/2\\-1&0\end{pmatrix}.
> $$
> What does this explain about Figure3.4?

## Hints

> [!hint]- Hint 1
> First use $\{\pm I\}\Gamma_1(4)=\Gamma_0(4)$.

> [!hint]- Hint 2
> Conjugate an arbitrary matrix $\begin{pmatrix}a&b\\4c&d\end{pmatrix}$ explicitly.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The preceding exercise gives $\{\pm I\}\Gamma_1(4)=\Gamma_0(4)$. Since $A^{-1}=\begin{pmatrix}0&-1\\2&0\end{pmatrix}$,
> $$
> A^{-1}\begin{pmatrix}a&b\\4c&d\end{pmatrix}A=\begin{pmatrix}d&-2c\\-2b&a\end{pmatrix}.
> $$
> If the original determinant is one then $a,d$ are odd, so the resulting matrix is congruent to $I$ modulo two. This proves containment in $\Gamma(2)$. Conversely any matrix in $\Gamma(2)$ has odd diagonal and even off-diagonal entries; the formula can be inverted with integral $a,b,c,d$ to produce a determinant-one element of $\Gamma_0(4)$. Thus the two groups are equal as stated.
>
> Because $\det A=1/2>0$, its fractional linear action maps the upper half-plane biholomorphically to itself and conjugates cusp neighborhoods as well. It induces an isomorphism of the compact modular curves, so both have genus zero. In even weight the slash action by $A$ gives isomorphisms of the corresponding modular and cusp spaces; adjoining $-I$ does not change these spaces. Therefore the even-weight entries for $\Gamma(2)$ and $\Gamma_1(4)$ in Figure3.4 must agree, namely $(k-1\pm3)/2$. Their odd columns need not agree: $\Gamma(2)$ contains $-I$, whereas $\Gamma_1(4)$ does not, and the equality conjugates its sign extension. This explains precisely the coincidence and the parity distinction in the table.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 108 / PDF 122. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
