---
title: "Exercise Rep117: Dedekind Determinant via Finite Abelian Characters"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 28, printed p. 548, PDF p. 563"
created: 2026-09-26
---

# Exercise Rep117: Dedekind Determinant via Finite Abelian Characters

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 28
> (The Dedekind determinant.) Let $G$ be a finite commutative group and let $F$ be the vector space of functions $G\to\mathbb C$. Show that the characters of $G$ (homomorphisms of $G$ into the roots of unity) form a basis for this space. If $f:G\to\mathbb C$ is a function, show, with rows and columns indexed by $a,b\in G$, that
>
> $$
> \det\bigl(f(ab^{-1})\bigr)
> =\prod_{\chi\in\widehat G}\left(\sum_{a\in G}\chi(a)f(a)\right).
> $$
>
> *Hint (source):* Use the characters and the characteristic functions of the elements of $G$ as two bases of $F$, and consider $T=\sum_{a\in G}f(a)T_a$, where $T_a$ is translation by $a$.
>
> Also show that
>
> $$
> \det\bigl(f(ab^{-1})\bigr)_{a,b\in G}
> =\left(\sum_{a\in G}f(a)\right)
> \det\bigl(f(ab^{-1})-f(b^{-1})\bigr)_{a,b\ne1}.
> $$

## Hints

> [!hint]- Hint 1: Diagonalize translations
> With $(T_a\varphi)(x)=\varphi(a^{-1}x)$, each character is an eigenvector, with eigenvalue $\chi(a)^{-1}$.

> [!hint]- Hint 2: Use row sums for the second identity
> Replace the column indexed by $1$ with the sum of all columns, then subtract the first row from every other row.

## Solution

> [!success]- Solution
> The structure theorem for finite abelian groups writes $G$ as a product of cyclic groups. On a cyclic factor of order $m$, the $m$ functions sending a generator to the $m$ distinct $m$-th roots of unity are characters. Their products give $|G|$ distinct characters of $G$. Distinct characters are orthogonal for the inner product
>
> $$
> (\varphi,\psi)=\sum_{x\in G}\varphi(x)\overline{\psi(x)},
> $$
>
> since the sum of a nontrivial character is zero: translating the sum by an element on which the character is not $1$ multiplies it by a nontrivial scalar. Thus the $|G|$ characters are linearly independent and form a basis of the $|G|$-dimensional space $F$.
>
> Let $T_a\varphi(x)=\varphi(a^{-1}x)$ and $T=\sum_{a\in G}f(a)T_a$. In the delta-function basis $\{\delta_b\}_{b\in G}$, the matrix entry in row $x$, column $b$ is
>
> $$
> (T\delta_b)(x)
> =\sum_{a\in G}f(a)\delta_b(a^{-1}x)
> =f(xb^{-1}).
> $$
>
> In the character basis, $T\chi=\left(\sum_a f(a)\chi(a)^{-1}\right)\chi$. Taking determinants and using that $\chi\mapsto\chi^{-1}$ permutes $\widehat G$ gives the first displayed identity exactly in Lang's orientation.
>
> For the second, write $M_{a,b}=f(ab^{-1})$ and $S=\sum_{x\in G}f(x)$. Every row sum of $M$ is $S$, because $b\mapsto ab^{-1}$ permutes $G$. Replace the column indexed by $1$ with the sum of all columns; this does not alter the determinant. The new first column consists entirely of $S$. Subtract the row indexed by $1$ from every other row, leaving a block upper-triangular matrix with upper-left entry $S$, zero entries below it, and lower-right block
>
> $$
> \bigl(f(ab^{-1})-f(b^{-1})\bigr)_{a,b\ne1}.
> $$
>
> Its determinant is $S$ times the determinant of that block, which proves the second identity. The argument also covers $S=0$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Routing:** Simultaneous diagonalization of translations by the character basis is the decisive method.
- **Source and proof status:** [S2, Ch. XIII, Ex. 28, printed p. 548, PDF p. 563]. Both printed determinant formulas and the source hint were checked on the original image. The proof is independent; it uses the named finite-abelian-group structure theorem.

