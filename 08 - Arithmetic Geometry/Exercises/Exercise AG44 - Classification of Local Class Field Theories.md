---
title: 'Exercise AG44: Classification of Local Class Field Theories'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 10, printed p. 326, PDF p. 345
source_refs:
- S4/ch-V/sec-1/ex-10
created: '2026-10-23'
---

# Exercise AG44: Classification of Local Class Field Theories

## Problem Statement

> [!question] Neukirch V.1.10
> Determine all class field theories $(d:G_K\to\widehat{\mathbb Z},\ v:K^*\to\mathbb Z)$ over a $p$-adic number field $K$.

## Hints

> [!hint]- Hint 1
> Every homomorphism from the local unit group to $\mathbb Z$ is zero.

> [!hint]- Hint 2
> The degree-$n$ extension selected by $d\bmod n$ must have ordinary residue degree $n$.

## Solution

> [!success]- Independent derivation
> Let $d_K:G_K\to\widehat{\mathbb Z}$ be the usual unramified degree map. The answer is
> $$
> d=u d_K\quad(u\in\widehat{\mathbb Z}^{\,*}),\qquad v=\varepsilon v_K\quad(\varepsilon\in\{1,-1\}).
> $$
> The source axioms impose no positivity order on this abstract valuation and no elementwise equality between $d\circ\operatorname{rec}_K$ and $v$; hence the two displayed choices are independent.
>
> To show that $v$ kills units, use $U_K\cong\text{finite}\times\mathbb Z_p^{[K:\mathbb Q_p]}$. Every homomorphism $h:\mathbb Z_p\to\mathbb Z$ is zero, even without a continuity assumption. Put $b=h(1)$. For $a\in\mathbb Z_p$ and each $r$, choose an integer $a_r\equiv a\pmod{p^r}$. Then $h(a)\equiv b a_r\pmod{p^r}$, so $h(a)=ba$ in $\mathbb Z_p$. If $b\ne0$, choose $a$ with $ba\notin\mathbb Z$, a contradiction. Thus $b=0$ and the same congruences give $h(a)=0$. Finite torsion is also killed. Therefore $v=c v_K$ for some integer $c$. Its image must contain $\mathbb Z$ and lies in $\mathbb Z$, so $c=\pm1$.
>
> For each $n$, let $E_n/K$ be the cyclic degree-$n$ extension cut out by $d\bmod n$. Its abstract inertia degree is $n$. Henselianity says $v(N E_n^*)=n\mathbb Z$. On the other hand ordinary valuation theory gives $v_K(N E_n^*)=f(E_n/K)\mathbb Z$. Consequently $f(E_n/K)=n=[E_n:K]$, so $E_n/K$ is unramified. Every finite quotient of $d$ therefore kills ordinary inertia, and hence $d$ factors through $d_K$. A continuous surjective endomorphism of $\widehat{\mathbb Z}$ is multiplication by a unit $u$, proving necessity.
>
> Conversely $u d_K$ has the same indices $f_E$ and same unramified extensions as $d_K$, and $\pm v_K$ has norm images $f_E\mathbb Z$. The abstract unit groups are the ordinary unit groups. Their Tate cohomology in degrees $0,-1$ vanishes for unramified extensions by V (1.2). Thus all the listed pairs satisfy the class-field axioms.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 10, printed p. 326, PDF p. 345]. Independent derivation. The codomain here is explicitly $\mathbb Z$, as printed; this is narrower than all subgroups of $\widehat{\mathbb Z}$ permitted in IV (4.6). The exact source definition is IV (4.6), printed p. 288, PDF p. 307; V (1.2), printed p. 319, PDF p. 338 supplies the unit cohomology input.
