---
title: "Exercise LA487: Subfamilies of Commuting Semisimple Operations"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - semisimplicity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 11, printed p. 662, PDF p. 677"
created: 2026-09-29
---

# Exercise LA487: Subfamilies of Commuting Semisimple Operations

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 11
> Let $E$ be a finite-dimensional vector space over a field $k$, and let $S$ be a commutative set of endomorphisms of $E$. Let $R=k[S]$. Assume that $R$ is semisimple. Show that every subset of $S$ is semisimple.

A set $T$ of operators is semisimple here when $E$ is semisimple as a module over the unital algebra $k[T]$ that it generates.

## Hints

> [!hint]- Hint 1: Use commutativity of the generated algebras
> A commutative semisimple ring is a finite product of fields and therefore has no nonzero nilpotent elements. The same absence of nilpotents holds in each of its subalgebras.

> [!hint]- Hint 2: Keep finite dimensionality in the argument
> For $T\subseteq S$, the algebra $k[T]$ is finite-dimensional because it lies in $\operatorname{End}_k(E)$. A finite-dimensional commutative reduced algebra is semisimple. Then every module over it is semisimple.

## Solution

> [!success]- Independent deduction from the commutative semisimple criterion
> Let $T\subseteq S$, and put $B=k[T]$. The elements of $S$ commute, so $R=k[S]$ is commutative; its subalgebra $B$ is commutative as well. Both algebras are finite-dimensional over $k$, since they are $k$-subspaces of the finite-dimensional space $\operatorname{End}_k(E)$.
>
> A commutative semisimple ring is a finite product of fields, by the complete proof of Lang XVII.6 in [[02 - Ring Theory/Exercises/Exercise R305 - Commutative Semisimple Rings Are Products of Fields|Exercise R305]]. Consequently $R$ is reduced: if $r^m=0$, each coordinate of $r$ in those fields is zero, so $r=0$.
>
> If $b\in B$ is nilpotent, it is also nilpotent in $R$, hence is zero. Thus $B$ is a finite-dimensional commutative reduced $k$-algebra. The complete proof of Lang XVII.7 in [[02 - Ring Theory/Exercises/Exercise R306 - Reduced Finite Dimensional Algebras Are Semisimple|Exercise R306]] shows that $B$ is semisimple. In that argument, the nilpotence of the Jacobson radical and reducedness force the radical to be zero, and the finite-dimensional radical criterion supplies semisimplicity.
>
> To see explicitly what this gives for $E$, write $B\cong K_1\times\cdots\times K_m$ with fields $K_i$ and corresponding orthogonal idempotents $e_i$. Then
>
> $$
> E=\bigoplus_{i=1}^m e_iE.
> $$
>
> Choose a basis of each $e_iE$ over $K_i$. Its one-dimensional $K_i$-spans are simple $B$-modules, and their direct sum is $E$. Hence $E$ is semisimple under $B$, which is exactly semisimplicity of the operator family $T$.
>
> This includes $T=\varnothing$: the unital generated algebra is $k\,\operatorname{id}_E$, and $E$ is a direct sum of one-dimensional $k$-spaces. If $E=0$, semisimplicity as a module is immediate from the empty direct sum; under Lang's convention that semisimple rings have $1\ne0$, the printed hypothesis on the zero image algebra does not arise.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]

## Notes

- **Source and proof status:** [S2, Ch. XVII, Ex. 11, printed p. 662, PDF p. 677] was checked on the original page image. The proof is an independent deduction from the preceding Exercises XVII.6–7 [printed p. 661, PDF p. 676], whose complete independent proofs are linked above as Exercises R305 and R306.
- **Named inputs:** The two preceding exercise proofs supply the product-of-fields and reduced-algebra criteria. The passage from a product of fields to a direct sum of simple submodules is made explicit above; no general matrix-ring classification theorem is imported here.
- **Commutativity matters:** A noncommutative semisimple algebra can have nonzero nilpotent elements and nonsemisimple subalgebras. For example, the algebra of upper triangular $2\times2$ matrices lies in the semisimple algebra $\operatorname{Mat}_2(k)$, but has the nonzero square-zero ideal spanned by $E_{12}$.
