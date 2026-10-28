---
title: "Exercise R464: Mobius Inversion for Primitive Eisenstein Sums"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.4, printed pp. 115\u2013116, PDF pp. 129\u2013130"
source_refs:
  - "S7/ch-4/sec-2/ex-4"
created: 2026-10-28
---

# Exercise R464: Mobius Inversion for Primitive Eisenstein Sums

## Problem Statement

> [!question] Original Exercise 4.2.4
> (a) The Möbius function $\mu:\mathbb Z^+\to\mathbb Z$ is defined by $\mu(n)=(-1)^g$ if $n=p_1\cdots p_g$ for distinct primes, and $\mu(n)=0$ if $p^2\mid n$ for some prime $p$. This includes $\mu(1)=1$. Show that for $n\in\mathbb Z^+$,
> $$
> \sum_{\substack{d\mid n\\d>0}}\mu(d)=\begin{cases}1,&n=1,\\0,&n>1.\end{cases}
> $$
> (b) Let $\overline v\in(\mathbb Z/N\mathbb Z)^2$ be a point of order $N$. It follows from part (a) that
> $$
> E_k^{\overline v}(\tau)=\epsilon_N\sum_{(c,d)\equiv\overline v\ (N)}'\ \sum_{\substack{n\mid\gcd(c,d)\\n>0}}\frac{\mu(n)}{(c\tau+d)^k}.
> $$
> Rearrange the sum to obtain formula (4.6). (A hint for this exercise is at the end of the book.)
>
> Formula (4.6) is $E_k^{\overline v}=\epsilon_N\sum_{a\in(\mathbb Z/N\mathbb Z)^*}\zeta_+^a(k,\mu)G_k^{a^{-1}\overline v}$, where $\zeta_+^a(k,\mu)=\sum_{n\ge1,\ n\equiv a\ (N)}\mu(n)n^{-k}$ and $G_k^{\overline w}=\sum_{(c,d)\equiv\overline w\ (N)}'(c\tau+d)^{-k}$. A prime on a lattice sum excludes $(0,0)$.

## Hints

> [!hint]- Hint 1
> Expand $\prod_{p\mid n}(1-1)$ for (a).

> [!hint]- Hint 2
> In (b), write $(c,d)=n(c',d')$. The order-$N$ condition makes $n$ a unit modulo $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** If the distinct prime divisors of $n>1$ are $p_1,\ldots,p_r$, only squarefree divisors contribute. They correspond to subsets of these primes, with sign $(-1)^{|S|}$. Hence their sum is $\sum_{S}(-1)^{|S|}=(1-1)^r=0$. For $n=1$ the sole divisor is $1$, contributing $1$.
>
> **(b).** Part (a) makes the inner sum the indicator of $\gcd(c,d)=1$, proving the starting identity. If $n\mid c,d$ and $(c,d)\equiv\overline v\pmod N$, then $(n,N)=1$: otherwise a prime divisor common to $n,N$ divides both coordinates of $\overline v$ modulo that prime, contrary to $\gcd(c_v,d_v,N)=1$, the order-$N$ condition. Thus after substituting $(c,d)=n(c',d')$, the congruence becomes $(c',d')\equiv n^{-1}\overline v\pmod N$. Therefore
> $$
> E_k^{\overline v}=\epsilon_N\sum_{\substack{n\ge1\\\gcd(n,N)=1}}\frac{\mu(n)}{n^k}G_k^{n^{-1}\overline v}.
> $$
> This interchange is absolute for $k>2$: replacing $|\mu(n)|$ by $1$ bounds it by $\sum_{n\ge1}n^{-k}$ times the full absolutely convergent lattice sum at $\tau$. Grouping $n$ by its unit residue class $a$ yields
> $$
> E_k^{\overline v}=\epsilon_N\sum_{a\in(\mathbb Z/N\mathbb Z)^*}\left(\sum_{\substack{n\ge1\\n\equiv a\ (N)}}\frac{\mu(n)}{n^k}\right)G_k^{a^{-1}\overline v},
> $$
> which is (4.6), with every normalization unchanged.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.4, printed pp. 115–116 / PDF pp. 129–130]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Formula (4.6) and the modified zeta coefficient are on printed pp.113–114/PDF pp.127–128. The proof is ordinary absolutely convergent Möbius inversion, not a formal manipulation of a conditionally convergent weight-two sum.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
