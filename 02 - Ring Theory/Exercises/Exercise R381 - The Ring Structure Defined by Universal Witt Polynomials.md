---
title: 'Exercise R381: The Ring Structure Defined by Universal Witt Polynomials'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 3, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-3
created: '2026-10-23'
---

# Exercise R381: The Ring Structure Defined by Universal Witt Polynomials

## Problem Statement

> [!question] Neukirch II.4.3
> Let $A$ be a commutative ring. For $a=(a_0,a_1,\ldots)$, $b=(b_0,b_1,\ldots)$, $a_i,b_i\in A$, put $a+b=(S_0(a,b),S_1(a,b),\ldots)$, $ab=(P_0(a,b),P_1(a,b),\ldots)$. Show that these vectors form a commutative ring $W(A)$ with $1$, called the ring of Witt vectors over $A$.

## Hints

> [!hint]- Hint 1
> Over a torsion-free ring the ghost map is injective.

> [!hint]- Hint 2
> Prove ring identities first in a universal polynomial ring over $\mathbb Z$, then evaluate the identities in the given ring, even if it has $p$-torsion.

## Solution

> [!success]- Independent derivation and stated source corrections
> The polynomials from Exercise II.4.2 have integral coefficients, so they evaluate on every commutative ring $A$ with identity. For a torsion-free ring the ghost map $a\mapsto(W_0(a),W_1(a),\ldots)$ is injective: equality of coordinates through $n-1$ leaves $p^n(a_n-b_n)=0$, hence $a_n=b_n$.
>
> Now take the universal torsion-free polynomial ring in the coordinates of three vectors $a,b,c$. The ghost maps of $(a+b)+c$ and $a+(b+c)$ coincide because ordinary addition is associative. Injectivity proves their equality there. Each coordinate of the asserted equality is a polynomial identity over $\mathbb Z$, so evaluation proves associativity for all $A$. The same argument proves commutativity of both operations, associativity of multiplication and both distributive laws.
>
> The zero vector has all ghost coordinates zero, and $e=(1,0,0,\ldots)$ has every ghost coordinate one. The universal argument gives $a+0=a$ and $ae=a$. Additive inverses exist without dividing by $p$ in $A$: the triangular ghost recursion over the universal ring implies $S_n(a,b)=a_n+b_n+Q_n(a_0,\ldots,a_{n-1},b_0,\ldots,b_{n-1})$, with $Q_n$ integral. Set $b_0=-a_0$ and recursively $b_n=-a_n-Q_n(\text{earlier coordinates})$; then $a+b=0$. Thus every ring axiom holds.
>
> The proof deliberately does not assert ghost injectivity in arbitrary $A$. For example, when $pA=0$, ghost coordinates reduce to $a_0^{p^n}$ and lose all higher coordinates. The universal polynomial identities are what allow passage to such rings.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 3, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
