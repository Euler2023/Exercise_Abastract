---
title: "Exercise R320: Eightfold Periodicity of Real Clifford Algebras"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 21, printed p. 758, PDF p. 773"
created: 2026-09-29
---

# Exercise R320: Eightfold Periodicity of Real Clifford Algebras

## Problem Statement

> [!question] Lang XIX.21
> (a) Establish isomorphisms
>
> $$
> C_{n+2}\cong C'_n\otimes C_2
> \qquad\text{and}\qquad
> C'_{n+2}\cong C_n\otimes C'_2.
> $$
>
> [Hint: Let $\{e_1,\ldots,e_{n+2}\}$ be the orthonormalized basis with $e_i^2=-1$. Then for the first isomorphism map $e_i\mapsto e'_i\otimes e_1e_2$ for $i=1,\ldots,n$ and map $e_{n+1},e_{n+2}$ on $1\otimes e_1$ and $1\otimes e_2$ respectively.]
>
> (b) Prove that $C_{n+8}\cong C_n\otimes M_{16}(\mathbb R)$ (which is called the periodicity property).
>
> (c) Conclude that $C_n$ is a semi-simple algebra over $\mathbb R$ for all $n$.
>
> From (c) one can tabulate the simple modules over $C_n$. See [ABS 64], reproduced in Husemoller [Hu 75], Chapter 11, section 6.

## Hints

> [!hint]- Hint 1
> The product $uv$ of two orthonormal Clifford generators has square $-1$ in both the positive and negative two-dimensional cases, and anticommutes with $u,v$.

> [!hint]- Hint 2
> Combine the two shifts by $2$ into a shift by $4$, then apply $\mathbb H\otimes\mathbb H\cong M_4(\mathbb R)$. Compute the eight initial algebras.

## Solution

> [!success]- Independent derivation
> Use the conventions of R318: generators of $C_n$ square to $-1$, those of $C'_n$ square to $1$, and distinct orthonormal generators anticommute. Put $C_0=C'_0=\mathbb R$. Tensor products here are ordinary real algebra tensor products.
>
> **(a) The two shifts.** In $C_2$, let $u^2=v^2=-1$ and $uv=-vu$. Then $w=uv$ satisfies $w^2=-1$, $wu=-uw$, and $wv=-vw$. In $C'_n\otimes C_2$, the elements
>
> $$
> e'_1\otimes w,\ldots,e'_n\otimes w,\ 1\otimes u,\ 1\otimes v
> $$
>
> all square to $-1$ and pairwise anticommute. They therefore define an algebra homomorphism from $C_{n+2}$. The last two images give $1\otimes w$; since $w$ is invertible, multiplying $e'_i\otimes w$ by $1\otimes w^{-1}$ gives $e'_i\otimes1$. Thus the images generate both tensor factors and the map is onto. Both algebras have dimension $2^{n+2}$ by R316, so it is an isomorphism.
>
> For the second identity, take $u,v\in C'_2$ with $u^2=v^2=1$ and $uv=-vu$. Again $w=uv$ has square $-1$ and anticommutes with $u,v$. The elements
>
> $$
> e_1\otimes w,\ldots,e_n\otimes w,\ 1\otimes u,\ 1\otimes v
> $$
>
> now all square to $1$ and anticommute, so they define a map from $C'_{n+2}$ to $C_n\otimes C'_2$. The same generation and dimension argument proves this map is an isomorphism.
>
> **(b) Periodicity.** By part (a) and R318,
>
> $$
> \begin{aligned}
> C_{n+4}
> &\cong C'_{n+2}\otimes C_2\\
> &\cong C_n\otimes C'_2\otimes C_2\\
> &\cong C_n\otimes M_2(\mathbb R)\otimes\mathbb H
> \cong C_n\otimes M_2(\mathbb H).
> \end{aligned}
> $$
>
> Applying this twice and using R319 gives
>
> $$
> \begin{aligned}
> C_{n+8}
> &\cong C_n\otimes M_2(\mathbb R)\otimes M_2(\mathbb R)
> \otimes\mathbb H\otimes\mathbb H\\
> &\cong C_n\otimes M_4(\mathbb R)\otimes M_4(\mathbb R)
> \cong C_n\otimes M_{16}(\mathbb R).
> \end{aligned}
> $$
>
> The matrix-tensor isomorphisms send tensor products of matrix units to the matrix unit with the pair of row indices and the pair of column indices; multiplication and bijectivity follow on those bases. No graded tensor-product convention is being substituted.
>
> **(c) Semisimplicity.** Parts (a), (b), and the three tensor isomorphisms of R319 give the initial table:
>
> | $r$ | $C_r$ |
> |---|---|
> | $0$ | $\mathbb R$ |
> | $1$ | $\mathbb C$ |
> | $2$ | $\mathbb H$ |
> | $3$ | $\mathbb H\times\mathbb H$ |
> | $4$ | $M_2(\mathbb H)$ |
> | $5$ | $M_4(\mathbb C)$ |
> | $6$ | $M_8(\mathbb R)$ |
> | $7$ | $M_8(\mathbb R)\times M_8(\mathbb R)$ |
>
> Here $C_3\cong C'_1\otimes\mathbb H\cong\mathbb H\times\mathbb H$, and the rows $4$ through $7$ follow by tensoring rows $0$ through $3$ with $M_2(\mathbb H)$. For $n=8q+r$, periodicity gives
>
> $$
> C_n\cong C_r\otimes M_{16^q}(\mathbb R).
> $$
>
> Each algebra in this expression is a finite product of matrix algebras over the division rings $\mathbb R,\mathbb C,\mathbb H$. Such an algebra is semisimple: the regular left module of $M_d(D)$ is the direct sum of its $d$ column left ideals. Each column ideal is simple, since a matrix can send any specified nonzero column vector to any other column vector (choose a nonzero entry, multiply by its inverse, and fill the required column coefficients). A finite product gives the direct sum of the regular modules of its factors. Hence the regular module is a finite sum of simples, proving semisimplicity of every $C_n$.
>
> The table also supplies the simple modules without an external classification theorem: a matrix factor $M_d(D)$ has the column module $D^d$ as its unique simple module up to isomorphism. To see uniqueness, any simple module is a cyclic quotient of the regular module, and some column summand maps nontrivially onto it, hence isomorphically. A product has one such type for each factor, by its central idempotents.

## Related Concepts

- [[02 - Ring Theory/Concepts/Clifford Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings]]

## Notes

The full statement, hint, and closing references were checked at [S2, Ch. XIX, Exercise 21, printed p. 758, PDF p. 773]. The cited bibliography identifies [ABS 64] as Atiyah-Bott-Shapiro, Clifford Modules, Topology 3, supplement 1 (1964), pp. 3-38, and [Hu 75] as Husemoller, Fibre Bundles, second edition (1975) [printed p. 753 / PDF p. 768]. These historical references are retained but were not used as proof inputs. The generator maps, periodicity, table, and module conclusion above are independently derived.
