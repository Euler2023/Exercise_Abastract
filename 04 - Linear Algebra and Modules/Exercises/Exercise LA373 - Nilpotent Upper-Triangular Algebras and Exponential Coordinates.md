---
title: "Exercise LA373: Nilpotent Upper-Triangular Algebras and Exponential Coordinates"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-algebras
  - nilpotent-matrices
  - unipotent-groups
  - exponential-map
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 29, printed p. 172, PDF p. 187"
created: 2026-08-29
---

# Exercise LA373: Nilpotent Upper-Triangular Algebras and Exponential Coordinates

## Problem Statement

> [!question] Exercise 29
> Suppose $k$ has characteristic $0$. Let $\mathfrak n$ be the set of all strictly upper triangular matrices of a given size $n\times n$ over $k$.
>
> (a) For a given matrix $X\in\mathfrak n$, let $D_1(X),\ldots,D_n(X)$ be its diagonals, so $D_1=D_1(X)$ is the main diagonal and is $0$ by the definition of $\mathfrak n$. Let $\mathfrak n_i$ be the subset of $\mathfrak n$ consisting of those matrices whose diagonals $D_1,\ldots,D_{n-i}$ are $0$. Thus $\mathfrak n_0=\{0\}$, $\mathfrak n_1$ consists of all matrices whose components are $0$ except possibly for $x_{nn}$; $\mathfrak n_2$ consists of all matrices whose components are $0$ except possibly those in the last two diagonals; and so forth. Show that each $\mathfrak n_i$ is an algebra, and its elements are nilpotent—in fact, the $(i+1)$-th power of each element is $0$.
>
> (b) Let $U$ be the set of elements $I+X$ with $X\in\mathfrak n$. Show that $U$ is a multiplicative group.
>
> (c) Let $\exp$ be the exponential series defined as usual. Show that $\exp$ defines a polynomial function on $\mathfrak n$—all but finitely many terms vanish when evaluated on a nilpotent matrix—and establishes a bijection
>
> $$
> \exp:\mathfrak n\longrightarrow U.
> $$
>
> Show that the inverse is given by the standard logarithm series.

> [!warning] Source issue in part (a)
> The printed entry $x_{nn}$ lies on the main diagonal and is always $0$ in a strictly upper triangular matrix. Since the only entry on the last diagonal $D_n$ is $x_{1n}$, the intended phrase is “except possibly for $x_{1n}$.” The solution below preserves the printed statement above and then uses this corrected index.

## Hints

> [!hint]- Hint 1
> Number diagonals so that $D_d$ consists of entries $x_{rs}$ with $s-r=d-1$. For $1\le i\le n-1$, an entry of a matrix in $\mathfrak n_i$ can be nonzero only when $s-r\ge n-i$.

> [!hint]- Hint 2
> A nonzero entry of $X^m$ comes from a chain of indices $r=r_0<r_1<\cdots<r_m=s$. Bound every jump $r_t-r_{t-1}$ from below.

> [!hint]- Hint 3
> For part (b), expand $(I+X)(I+Y)$ and use the finite geometric series for $(I+X)^{-1}$. For part (c), work with the identities between $\exp(t)$ and $\log(1+t)$ in the truncated polynomial ring $k[t]/(t^n)$.

## Solution

> [!success]- Independently derived solution
> **(a) The subalgebras and their nilpotence.** The diagonal $D_d$ consists of positions $(r,s)$ satisfying
>
> $$
> s-r=d-1.
> $$
>
> Thus the corrected description of $\mathfrak n_1$ allows only the position $(1,n)$, namely $x_{1n}$.
>
> The cases $i=0$ and $i=n$ are immediate as far as closure is concerned: $\mathfrak n_0=0$, while $\mathfrak n_n=\mathfrak n$, and a product of strictly upper triangular matrices is strictly upper triangular. Now fix $1\le i\le n-1$ and put
>
> $$
> q=n-i.
> $$
>
> A matrix $X\in\mathfrak n_i$ can have $x_{rs}\ne0$ only if $s-r\ge q$. The set $\mathfrak n_i$ is plainly closed under addition and scalar multiplication. If $X,Y\in\mathfrak n_i$ and a summand $x_{rt}y_{ts}$ in $(XY)_{rs}$ is nonzero, then
>
> $$
> t-r\ge q,
> \qquad
> s-t\ge q,
> $$
>
> whence $s-r\ge2q\ge q$. Therefore $XY\in\mathfrak n_i$, and $\mathfrak n_i$ is a nonunital $k$-algebra.
>
> More generally, a nonzero summand in the $(r,s)$-entry of $X^m$ requires a chain
>
> $$
> r=r_0<r_1<\cdots<r_m=s
> $$
>
> in which every jump is at least $q$. Hence
>
> $$
> s-r\ge mq.
> $$
>
> For $m=i+1$,
>
> $$
> mq=(i+1)(n-i)=n+i(n-i-1)\ge n.
> $$
>
> But indices between $1$ and $n$ satisfy $s-r\le n-1$, so no such chain exists and $X^{i+1}=0$. This also holds for $i=0$ because $X=0$. For $i=n$, every strictly upper triangular $n\times n$ matrix satisfies $X^n=0$, and therefore certainly $X^{n+1}=0$. This proves the assertion for every $i$.
>
> **(b) The group $U$.** If $X,Y\in\mathfrak n$, then
>
> $$
> (I+X)(I+Y)=I+(X+Y+XY),
> $$
>
> and $X+Y+XY\in\mathfrak n$, so $U$ is closed under multiplication. It contains $I$. Since $X^n=0$,
>
> $$
> (I+X)^{-1}
> =I-X+X^2-\cdots+(-1)^{n-1}X^{n-1},
> $$
>
> which again belongs to $I+\mathfrak n$. Associativity is inherited from matrix multiplication; hence $U$ is a group.
>
> **(c) Exponential and logarithm coordinates.** Since $X^n=0$ for $X\in\mathfrak n$,
>
> $$
> \exp(X)=\sum_{m=0}^{n-1}\frac{X^m}{m!}.
> $$
>
> Characteristic $0$ ensures that all displayed denominators are invertible in $k$. The nonconstant part is strictly upper triangular, so $\exp(X)\in U$. Conversely, for $I+Y\in U$, define
>
> $$
> \log(I+Y)
> =\sum_{m=1}^{n-1}(-1)^{m+1}\frac{Y^m}{m}.
> $$
>
> This too is a finite polynomial and lies in $\mathfrak n$. Over the characteristic-zero field $k$, the usual one-variable formal identities imply
>
> $$
> \log(\exp(t))\equiv t\pmod{t^n},
> \qquad
> \exp(\log(1+t))\equiv1+t\pmod{t^n}.
> $$
>
> Substituting the nilpotent matrix $X$ or $Y$ is legitimate because its $n$-th power vanishes. Therefore
>
> $$
> \log(\exp X)=X,
> \qquad
> \exp(\log(I+Y))=I+Y.
> $$
>
> Hence $\exp:\mathfrak n\to U$ is a polynomial bijection whose inverse is the finite logarithm polynomial.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Routing rationale:** Although the exercise also constructs an algebra and a group, the decisive tools are upper-triangular matrix multiplication, diagonal support, nilpotence, and matrix polynomials, so it is archived under Linear Algebra and Modules.
- **Source issue:** The printed $x_{nn}$ was preserved in the Problem Statement. The intended $x_{1n}$ is forced both by the diagonal indexing and by strict upper triangularity; the solution uses the corrected entry explicitly.
- **Algebra convention:** Each $\mathfrak n_i$ is a nonunital subalgebra of the full matrix algebra.
- **Claim boundary:** For noncommuting $X,Y\in\mathfrak n$, one generally does not have $\exp(X+Y)=\exp(X)\exp(Y)$. The exercise asks for a polynomial bijection, not a group homomorphism from the additive group of $\mathfrak n$.
- **Source status:** The statement, including the printed $x_{nn}$, was visually checked at [S2, Ch. III, Ex. 29, printed p. 172, PDF p. 187]. The correction and all proofs are independent.
