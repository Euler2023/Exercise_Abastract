---
title: 'Exercise LA568: Congruence Independence of Global Units'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 4, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-4
created: '2026-10-23'
---

# Exercise LA568: Congruence Independence of Global Units

## Problem Statement

> [!question] Neukirch VI.1.4
> Let $\epsilon_1,\ldots,\epsilon_t\in\mathcal O_K^*$ be independent units. The images $\bar\epsilon_1,\ldots,\bar\epsilon_t$ in $I_f^1$ are then independent units with respect to the exponentiation with elements of $\widehat{\mathbb Z}$, i.e., any relation
> $$
> \bar\epsilon_1^{x_1}\cdots\bar\epsilon_t^{x_t}=1,\qquad x_i\in\widehat{\mathbb Z},
> $$
> implies $x_i=0$, $i=1,\ldots,t$.

## Hints

> [!hint]- Hint 1 — first step
> Reduce a proposed profinite relation modulo an arbitrary positive integer before using the independence of the original units.

> [!hint]- Hint 2 — proof route
> Approximate the exponents modulo $2n$ and apply the preceding exercise. Then use the integer matrix describing the units in a free unit basis.

## Solution

> [!success]- Independent derivation
> Set $E=\mathcal O_K^\times$ and choose a basis of the free quotient $E/\mu(K)\cong\mathbb Z^r$. Let the columns of $B\in M_{r,t}(\mathbb Z)$ be the coordinates of the $\epsilon_i$ in this basis. Independence means that the columns of $B$ are linearly independent over $\mathbb Q$.
> Given any $n\ge1$, choose integers $a_i\equiv x_i\pmod{2n\widehat{\mathbb Z}}$. The hypothesis implies that $u=\prod_i\epsilon_i^{a_i}$ is a $2n$-th power in every finite completion $K_v$, because $a_i-x_i=2ny_i$ and exponentiation extends continuously on the unit group at a finite place. Applying VI.§1 Exercise 2 with exponent $2n$ gives $u\in K^{\times n}$. If $u=b^n$, then every finite valuation satisfies $v(b)=v(u)/n=0$. Thus $b\in E$ and therefore $Ba\in n\mathbb Z^r$.
> Thus $Bx\equiv0\pmod n$ for every $n$, so $Bx=0$ in $\widehat{\mathbb Z}^r$. Take a rational left inverse and clear denominators. There are an integer matrix $C$ and a nonzero integer $d$ such that $CB=dI_t$, hence $dx=0$. Since $\widehat{\mathbb Z}=\prod_\ell\mathbb Z_\ell$ is torsion-free, $x=0$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Unit Lattices]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against a 200 dpi image of the original page [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 4, printed p. 367, PDF p. 386]. The solution is an independent derivation in this vault; citing inputs does not mean that the book solves this exercise. Here independent means multiplicatively independent modulo roots of unity. The given units are not assumed already to form a basis of the full unit group.
