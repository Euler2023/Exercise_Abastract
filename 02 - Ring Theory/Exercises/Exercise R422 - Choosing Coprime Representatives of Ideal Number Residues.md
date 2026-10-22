---
title: 'Exercise R422: Choosing Coprime Representatives of Ideal Number Residues'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 5, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-5
created: '2026-10-23'
---

# Exercise R422: Choosing Coprime Representatives of Ideal Number Residues

## Problem Statement

> [!question] Neukirch VII.7.5
> If $a,m\in\widehat{\mathfrak o}$, then there exists in every residue class mod $m$ prime to $m$, an ideal integer prime to $a$.

## Hints

> [!hint]- Hint 1
> Fix an integral representative $r$ of the residue class and work in the ordinary fractional ideal $I=(r)^{-1}$.

> [!hint]- Hint 2
> Prescribe $t\equiv1$ modulo $(m)I$, and nonzero classes modulo $\mathfrak p I$ at primes dividing $(a)$ but not $(m)$. Set $x=rt$.

## Solution

> [!success]- Independent derivation
> The source constructs a multiplicative group $\widehat K^*$ with a surjective ideal map $a\mapsto(a)$ and exact sequence
> $$
> 1\longrightarrow\mathfrak o^*\longrightarrow\widehat K^*\longrightarrow J\longrightarrow1.
> $$
> Its integral ideal numbers are $\widehat{\mathfrak o}=\{a:(a)\subseteq\mathfrak o\}$, and $a\sim b$ means $a/b\in K^*$. This multiplicative set is not generally a ring. Sums below are formed only among elements in a common $K$-multiple, where ordinary addition is defined.
>
> Let $r\in\widehat{\mathfrak o}$ represent the given class, with $((r),(m))=1$. Write $I=(r)^{-1}$, an invertible ordinary fractional ideal. Because $r$ is integral, $1\in I$. Set
> $$
> S=\{\mathfrak p:\mathfrak p\mid(a),\ \mathfrak p\nmid(m)\}.
> $$
> For each $\mathfrak p\in S$, choose $\beta_{\mathfrak p}\in I$ whose class in $I/\mathfrak p I$ is nonzero. Such a class exists because an invertible fractional ideal is locally a free module of rank one, so $I/\mathfrak p I$ is a one-dimensional vector space over $\mathfrak o/\mathfrak p$.
>
> The ideals $(m)$ and the distinct $\mathfrak p\in S$ are pairwise coprime. CRT for the module $I$ supplies $t\in I$ such that
> $$
> t\equiv1\pmod{(m)I},\qquad t\equiv\beta_{\mathfrak p}\pmod{\mathfrak p I}\quad(\mathfrak p\in S).
> $$
> For clarity, module CRT follows by using ordinary CRT coefficients $e_i$: the sum of $e_i$ times any chosen module representatives meets the prescribed classes. If the conditions allow $t=0$, choose a nonzero representative by adding a nonzero element of the intersection modulus times $I$.
>
> Set $x=rt$. Since $t\in(r)^{-1}$, $x$ is an integral ideal number, and $x\sim r$. Also $t-1\in(m)(r)^{-1}$, so
> $$
> (x-r)=(r)(t-1)\subseteq(m),
> $$
> with a zero difference allowed. Therefore $x\equiv r\pmod m$.
>
> If $\mathfrak p\in S$, then $t\notin\mathfrak p I$ means $v_{\mathfrak p}(t)=v_{\mathfrak p}(I)=-v_{\mathfrak p}((r))$. Hence $v_{\mathfrak p}((x))=0$. If $\mathfrak p\mid(a)$ also divides $(m)$, the original coprimality gives $v_{\mathfrak p}((r))=0$, so $I_{\mathfrak p}=\mathfrak o_{\mathfrak p}$ and the congruence $t\equiv1\pmod{(m)I}$ makes $t$ a local unit. Again $v_{\mathfrak p}((x))=0$. Thus $((x),(a))=1$, as required.
>
> The hypothesis on the residue class is necessary: an ordinary residue class $0\pmod2$ has no representative prime to $a=2$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The complete exercise, including “in every residue class” and its coprimality condition, was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 5, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent fractional-ideal CRT construction. Invertibility of nonzero fractional ideals and their rank-one local description are imported Dedekind-domain inputs, not conclusions newly claimed about an additive ring of ideal numbers.
