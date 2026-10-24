---
title: 'Exercise R423: The Ideal Number Exact Sequence for Small Ray Classes'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 6, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-6
created: '2026-10-23'
---

# Exercise R423: The Ideal Number Exact Sequence for Small Ray Classes

## Problem Statement

> [!question] Neukirch VII.7.6
> For the factor group $J^{\mathfrak m}/\bar P^{\mathfrak m}$ by the group $\bar P^{\mathfrak m}$ of all principal ideals $(a)$ such that $a\equiv1\pmod{\mathfrak m}$, one has the exact sequence
> $$
> 1\longrightarrow\mathfrak o^*/\mathfrak o^{\mathfrak m}
> \longrightarrow(\widehat{\mathfrak o}/\mathfrak m)^*
> \longrightarrow J^{\mathfrak m}/\bar P^{\mathfrak m}\longrightarrow1,
> $$
> where $\mathfrak o^{\mathfrak m}=\{\varepsilon\in\mathfrak o^*: \varepsilon\equiv1\pmod{\mathfrak m}\}$.

## Hints

> [!hint]- Hint 1
> Send the residue class of an ideal number $a$ to the small ray class of its ideal $(a)$.

> [!hint]- Hint 2
> If $(a)=(\alpha)$ with $\alpha\equiv1$, then $a/\alpha$ is an ordinary unit. For surjectivity, clear ideal denominators by an ordinary element congruent to $1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The source constructs a multiplicative group $\widehat K^*$ with a surjective ideal map $a\mapsto(a)$ and exact sequence
> $$
> 1\longrightarrow\mathfrak o^*\longrightarrow\widehat K^*\longrightarrow J\longrightarrow1.
> $$
> Its integral ideal numbers are $\widehat{\mathfrak o}=\{a:(a)\subseteq\mathfrak o\}$, and $a\sim b$ means $a/b\in K^*$. This multiplicative set is not generally a ring. Sums below are formed only among elements in a common $K$-multiple, where ordinary addition is defined.
>
> Let $G=(\widehat{\mathfrak o}/\mathfrak m)^*$, whose multiplicative group structure is source Proposition (7.3). Send a unit $\varepsilon$ to its residue class. Its kernel consists exactly of the units congruent to $1$, so this induces an injection $\mathfrak o^*/\mathfrak o^{\mathfrak m}\hookrightarrow G$.
>
> Define
> $$
> \Phi:G\longrightarrow J^{\mathfrak m}/\bar P^{\mathfrak m},\qquad [a]\longmapsto[(a)].
> $$
> If $a\equiv b\pmod{\mathfrak m}$, then $a/b\in K^*$ and at each $\mathfrak p\mid\mathfrak m$ the element $b$ has ideal valuation zero. Thus $a/b\equiv1\pmod{\mathfrak m}$ in the ordinary local sense, and $(a)(b)^{-1}\in\bar P^{\mathfrak m}$. This proves well-definedness; multiplicativity follows from the ideal map.
>
> To prove surjectivity, take any fractional ideal $\mathfrak a\in J^{\mathfrak m}$. Let
> $$
> \mathfrak D=\prod_{v_{\mathfrak p}(\mathfrak a)<0}\mathfrak p^{-v_{\mathfrak p}(\mathfrak a)}.
> $$
> It is coprime to $\mathfrak m$. CRT chooses a nonzero ordinary $t\in\mathfrak D$ with $t\equiv1\pmod{\mathfrak m}$. Then $(t)\mathfrak a$ is integral and prime to $\mathfrak m$. Surjectivity in (7.1) gives an integral ideal number $a$ over it. Its image under $\Phi$ is $[(t)\mathfrak a]=[\mathfrak a]$, because $(t)\in\bar P^{\mathfrak m}$.
>
> Finally, if $[a]\in\ker\Phi$, then $(a)=(\alpha)$ for some $\alpha\in K^*$ congruent to $1$ modulo $\mathfrak m$. The quotient $\varepsilon=a/\alpha$ belongs to the kernel of the ideal map, namely $\mathfrak o^*$. Since $a=\varepsilon\alpha$ and $\alpha\equiv1$, we get $a\equiv\varepsilon\pmod{\mathfrak m}$. Hence $[a]$ lies in the image of units. Conversely every unit has unit ideal, so its image under $\Phi$ is trivial. This proves exactness at every term.
>
> The small ray convention is essential: $\bar P^{\mathfrak m}$ has no total-positivity requirement. The argument would need additional sign data for the larger ray class group.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The sequence, hats, barred principal subgroup and congruence-unit definition were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 6, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent proof of both maps, both kernels and surjectivity. Ordinary CRT is the only moving-ideal input; the required denominator-clearing step is proved in the solution.
