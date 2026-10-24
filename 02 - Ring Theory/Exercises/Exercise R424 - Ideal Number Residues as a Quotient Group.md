---
title: 'Exercise R424: Ideal Number Residues as a Quotient Group'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 7, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-7
created: '2026-10-23'
---

# Exercise R424: Ideal Number Residues as a Quotient Group

## Problem Statement

> [!question] Neukirch VII.7.7
> Let $\widehat K^{(\mathfrak m)}$ be the preimage of $J^{\mathfrak m}$ under $\widehat K^*\to J$, and let $K^{\mathfrak m}=\{a\in K^*: a\equiv1\pmod{\mathfrak m}\}$. Then one has $(\widehat{\mathfrak o}/\mathfrak m)^*=\widehat K^{(\mathfrak m)}/K^{\mathfrak m}$.

## Hints

> [!hint]- Hint 1
> For integral ideal numbers prime to $\mathfrak m$, prove that congruence is equivalent to the ratio lying in the ordinary group $K^{\mathfrak m}$.

> [!hint]- Hint 2
> For any fractional ideal number prime to $\mathfrak m$, clear denominators with an ordinary $t\equiv1\pmod{\mathfrak m}$. This preserves its quotient class.

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
> We first identify the equivalence relation exactly. If integral ideal numbers $a,b$ are prime to $\mathfrak m$ and congruent, then $a\sim b$, hence $a/b\in K^*$. At every $\mathfrak p\mid\mathfrak m$, $b$ has valuation zero, so
> $$
> v_{\mathfrak p}(a/b-1)=v_{\mathfrak p}((a-b))-v_{\mathfrak p}((b))\ge v_{\mathfrak p}(\mathfrak m).
> $$
> Thus $a/b\in K^{\mathfrak m}$. Conversely, if $a/b\in K^{\mathfrak m}$, then $a\sim b$, and the same equality gives the required divisibility at all primes of $\mathfrak m$. At all other primes $a-b$ is integral, since the two summands lie in a common $K$-multiple and are integral. Therefore $a\equiv b\pmod{\mathfrak m}$.
>
> Consequently inclusion of the integral representatives induces an injective multiplicative map
> $$
> (\widehat{\mathfrak o}/\mathfrak m)^*\longrightarrow\widehat K^{(\mathfrak m)}/K^{\mathfrak m},\qquad[a]\longmapsto aK^{\mathfrak m}.
> $$
> To prove surjectivity, take $x\in\widehat K^{(\mathfrak m)}$. Its ideal $\mathfrak a=(x)$ has zero valuations at primes dividing $\mathfrak m$. The denominator ideal
> $$
> \mathfrak D=\prod_{v_{\mathfrak p}(\mathfrak a)<0}\mathfrak p^{-v_{\mathfrak p}(\mathfrak a)}
> $$
> is coprime to $\mathfrak m$. Choose a nonzero $t\in\mathfrak D$ with $t\equiv1\pmod{\mathfrak m}$ by ordinary CRT. Then $a=tx$ is an integral ideal number prime to $\mathfrak m$, while $aK^{\mathfrak m}=xK^{\mathfrak m}$. Every quotient class is therefore reached. The resulting bijective homomorphism is the claimed canonical isomorphism; the equality sign in the source records this identification.
>
> For $K=\mathbb Q$ and modulus $5$, the fraction $1/2$ is prime to $5$. Taking $t=6\equiv1\pmod5$ gives the integral representative $3$, which indeed represents the inverse of $2$ modulo $5$. This illustrates why an arbitrary denominator-clearing integer, without the congruence $t\equiv1$, would change the residue class.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** Both groups, the preimage condition and the ordinary congruence subgroup were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 7, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent equivalence-relation and denominator-clearing proof. The subgroup in the denominator is $K^{\mathfrak m}$, not its ideal-number analogue and not a subgroup defined by archimedean positivity.
