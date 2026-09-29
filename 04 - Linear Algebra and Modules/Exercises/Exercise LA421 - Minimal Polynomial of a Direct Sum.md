---
title: "Exercise LA421: Minimal Polynomial of a Direct Sum"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - minimal-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 5, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA421: Minimal Polynomial of a Direct Sum

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 5
> Let $M,M'$ be square matrices over a field $k$. Let $q,q'$ be their respective minimal polynomials. Show that the minimal polynomial of
>
> $$
> \begin{pmatrix}M&0\\0&M'\end{pmatrix}
> $$
>
> is the least common multiple of $q,q'$.

## Hints

> [!hint]- Hint 1: Evaluate a polynomial block by block
> For $B=\operatorname{diag}(M,M')$, express $f(B)$ in terms of $f(M)$ and $f(M')$.

> [!hint]- Hint 2: Describe all annihilating polynomials
> Divide $f$ by the monic minimal polynomial to see that $f(M)=0$ if and only if $q$ divides $f$.

## Solution

> [!success]- Solution
> For every $f\in k[t]$, the block multiplication rules give
>
> $$
> f(B)=\begin{pmatrix}f(M)&0\\0&f(M')\end{pmatrix}.
> $$
>
> First recall the divisibility property of the minimal polynomial. Divide $f$ by $q$ to write $f=aq+r$ with $\deg r<\deg q$ or $r=0$. If $f(M)=0$, then $r(M)=0$. A nonzero such $r$, after division by its leading coefficient, would be a monic annihilating polynomial of smaller degree than $q$, which is impossible. Hence $q\mid f$. The converse follows from $q(M)=0$.
>
> Applying the same argument to $M'$ gives
>
> $$
> f(B)=0
> \quad\Longleftrightarrow\quad
> q\mid f\ \text{and}\ q'\mid f
> \quad\Longleftrightarrow\quad
> \operatorname{lcm}(q,q')\mid f.
> $$
>
> With the least common multiple normalized to be monic, it is therefore the monic polynomial of least degree annihilating $B$, as required.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 5, printed p. 568, PDF p. 583]. The original statement and block matrix were checked visually. The argument is independent and proves the needed minimal-polynomial divisibility property using polynomial division.
- **Convention:** Both minimal polynomials and their least common multiple are monic. The two diagonal blocks may have different sizes.
