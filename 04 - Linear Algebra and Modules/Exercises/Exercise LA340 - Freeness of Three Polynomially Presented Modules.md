---
title: "Exercise LA340: Freeness of Three Polynomially Presented Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - polynomial-rings
  - free-modules
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 9, Polynomial Rings in Several Variables, Ex. 9.1, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA340: Freeness of Three Polynomially Presented Modules

## Problem Statement

> [!question] Exercise 9.1
> Determine whether the modules over $\mathbb C[x,y]$ presented by the following matrices are free:
>
> $$
> \text{(a) }\begin{pmatrix}x^2+1&x\\x^2y+x+y&xy+1\end{pmatrix},
> $$
>
> $$
> \text{(b) }\begin{pmatrix}xy-1\\x^2-y^2\\y\end{pmatrix},
> \qquad
> \text{(c) }\begin{pmatrix}x-1&x\\y&y+1\\x&y\\x^2&2y\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Apply Theorem 14.9.1 by checking the rank after every evaluation $(x,y)=(c_1,c_2)$.

## Solution

> [!success]- Solution
> **(a)** The determinant is identically one:
>
> $$
> (x^2+1)(xy+1)-x(x^2y+x+y)=1.
> $$
>
> Thus the presentation matrix is invertible, its cokernel is the zero module, and it is free of rank zero.
>
> **(b)** The column never evaluates to zero. Indeed, if $y=0$, then $xy-1=-1$. Hence its evaluated rank is always one. Theorem 14.9.1 gives a free cokernel of rank $3-1=2$.
>
> **(c)** The evaluated rank is always two. If every $2\times2$ minor vanished, the first two-row minor would give
>
> $$
> x-y-1=0.
> $$
>
> The minor from rows one and three would then give $1-2x=0$, so $(x,y)=(1/2,-1/2)$. But the minor from rows three and four is
>
> $$
> xy(2-x),
> $$
>
> which is nonzero at that point, a contradiction. Therefore Theorem 14.9.1 gives a free cokernel of rank $4-2=2$.
>
> In summary,
>
> $$
> \boxed{\text{all three are free, of ranks }0,2,2\text{ respectively}.}
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Module Theory is primary because evaluated presentation ranks decide freeness.
- **External source input:** The converse direction used here is the Quillen–Suslin theorem as stated, without proof, in Artin's Theorem 14.9.1.
- **Computational verification:** All determinants and minors cited above were expanded exactly.
- **Source status:** [S1, Ch. 14, §14.9, Ex. 9.1, printed p. 440, PDF p. 452].
