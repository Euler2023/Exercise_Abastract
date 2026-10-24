---
title: 'Exercise R420: Solving Linear Congruences of Ideal Numbers'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 3, printed p. 493, PDF p. 512
source_refs:
- S4/ch-VII/sec-7/ex-3
created: '2026-10-23'
---

# Exercise R420: Solving Linear Congruences of Ideal Numbers

## Problem Statement

> [!question] Neukirch VII.7.3
> The congruence $ax\equiv b\pmod m$ has a solution in $\widehat{\mathfrak o}$ with integral $x$ if and only if $(a,m)\mid b$. This solution is unique mod $m$, provided $(a,m)=1$.

## Hints

> [!hint]- Hint 1
> Use the ideal-number Bezout identity for $d=(a,m)$ and multiply it by $b/d$.

> [!hint]- Hint 2
> If two solutions exist, they have the same $\sim$-class. Apply prime-ideal valuations to $m\mid a(x-x\prime)$.

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
> We use the section's setting of nonzero integral ideal numbers $a,b,m$. Congruence means both $ax\sim b$ and $m\mid ax-b$, with a zero difference allowed. Write $d=(a,m)$.
>
> If $x$ is an integral solution, then $d\mid ax$ and $d\mid m$. Both terms of $b=ax-(ax-b)$ are divisible by $d$. Their quotients lie in a common $K$-multiple and are integral: if $r\sim s$ and both are integral, write $r=\alpha s$; then $(r+s)=(s)(\alpha+1)\subseteq(r)+(s)\subseteq\mathfrak o$, unless the sum is zero. Thus $d\mid b$.
>
> Conversely assume $d\mid b$. The preceding exercise gives integral ideal numbers or zeros $u,v$ such that
> $$
> d=ua+vm,\qquad u\sim d/a\ (u\ne0),\qquad v\sim d/m\ (v\ne0).
> $$
> Set $x=(b/d)u$. It is integral, and
> $$
> ax=b-(b/d)vm.
> $$
> If this $x$ is nonzero, its equivalence is $ax\sim b$, and the displayed difference is divisible by $m$. If it is zero, then $u=0$, $d=vm$, so $m\mid b$. Choose an ordinary nonzero integer $h$ large enough that $w=hb/a$ is an integral ideal number; this clears the finitely many negative valuations of $(b)/(a)$. Then $aw=hb\sim b$ and $aw-b=(h-1)b$ is divisible by $m$, yielding a nonzero solution $w$. This handles the fact that the source's semigroup excludes zero.
>
> Now suppose $(a,m)=1$ and $x,x'$ are solutions. Both $ax$ and $ax'$ are equivalent to $b$, so $x\sim x'$. For every prime $\mathfrak p\mid(m)$, $v_{\mathfrak p}((a))=0$ and
> $$
> v_{\mathfrak p}((a(x-x')))=v_{\mathfrak p}((x-x'))\ge v_{\mathfrak p}((m)).
> $$
> The difference is integral at all other primes because $x,x'$ are integral in a common $K$-multiple. Therefore $m\mid x-x'$ and $x\equiv x'\pmod m$.
>
> For ordinary integers, $6x\equiv4\pmod{10}$ has solutions since $2\mid4$, but $x=4$ and $x=9$ are distinct modulo $10$. This verifies why coprimality is needed for uniqueness.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The existence criterion and the conditional uniqueness statement were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Exercise 3, printed p. 493, PDF p. 512]. The ideal-number construction and all notations were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §7, Proposition (7.1) and following definitions, printed pp. 485–486, PDF pp. 504–505]; the residue classes and Proposition (7.3) at [printed p. 487, PDF p. 506]. The source's hats denote ideal numbers, not a completion. No source figure is required.
- **Proof scope:** Independent ideal-number Bezout and valuation proof. The potential zero from a Bezout construction is explicitly replaced by a nonzero semigroup representative; no general addition law on unrelated ideal-number classes is assumed.
