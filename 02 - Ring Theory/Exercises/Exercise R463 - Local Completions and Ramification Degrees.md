---
title: "Exercise R463: Local Completions and Ramification Degrees"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.2, Exercise 9.2.3, printed p. 383, PDF p. 395"
source_refs:
  - "S7/ch-9/sec-2/ex-3"
created: 2026-10-28
---

# Exercise R463: Local Completions and Ramification Degrees

## Problem Statement

> [!question] Original Exercise 9.2.3
> (a) Show that $\lambda^{ne_\lambda}\cap\mathbb Z=\ell^n\mathbb Z$ for all $n\in\mathbb Z^+$, and hence we may view $\mathbb Z_\ell$ as a subring of $\mathcal O_{K,\lambda}$ and $\mathbb Q_\ell$ as a subfield of $K_\lambda$. (Hints for this exercise are at the end of the book.)
>
> (b) Show that the containments are equalities when $e_\lambda f_\lambda=1$.
>
> (c) What does (9.10) say for the three Galois number fields of Section 9.1?

## Hints

> [!hint]- Hint 1
> For an ordinary integer $a$, its $\lambda$-valuation is $e_\lambda v_\ell(a)$.

> [!hint]- Hint 2
> When $e=f=1$, use residue digits $0,\ldots,\ell-1$ and uniformizer $\ell$ in the complete local ring.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Factor a nonzero integer as $a=\ell^r b$ with $(b,\ell)=1$. The factorization of $\ell\mathcal O_K$ gives $v_\lambda(\ell)=e_\lambda$, and $b\notin\lambda$ because $\lambda\cap\mathbb Z=(\ell)$. Thus $v_\lambda(a)=e_\lambda r$. Membership in $\lambda^{ne_\lambda}$ is exactly $r\ge n$, proving the equality (also true for $a=0$). Consequently $\mathbb Z/\ell^n\mathbb Z\hookrightarrow\mathcal O_K/\lambda^{ne_\lambda}$. Taking inverse limits, using that the exponents $ne_\lambda$ are cofinal, yields an injection $\mathbb Z_\ell\hookrightarrow\mathcal O_{K,\lambda}$; extending fractions embeds $\mathbb Q_\ell$ into $K_\lambda$.
>
> **(b).** Both positive integers $e_\lambda,f_\lambda$ must equal one. The complete local ring then has residue field $\mathbb F_\ell$ and uniformizer $\ell$. For any $x$ choose its residue digit $a_0\in\{0,\ldots,\ell-1\}$, write $x=a_0+\ell x_1$, and repeat. Completeness gives $x=\sum_{i\ge0}a_i\ell^i\in\mathbb Z_\ell$. Uniqueness follows by reducing the first differing digit. Hence the integer rings agree and so do their fraction fields.
>
> **(c).** Formula (9.10) is $K\otimes_{\mathbb Q}\mathbb Q_\ell\cong\prod_{\lambda\mid\ell}K_\lambda$. For a quadratic field $K=\mathbb Q(\sqrt d)$ this is $\mathbb Q_\ell[X]/(X^2-d)$: it is $\mathbb Q_\ell^2$ when $d$ is a square in $\mathbb Q_\ell$, otherwise the quadratic field $\mathbb Q_\ell(\sqrt d)$. The latter can be ramified or unramified; no odd-prime residue test is asserted at $\ell=2$.
>
> For $K=\mathbb Q(\mu_N)$ write $N=\ell^a M$ with $(M,\ell)=1$. Put $f=\operatorname{ord}_M(\ell)$, with $f=1$ if $M=1$, and $e=\varphi(\ell^a)$, with $e=1$ if $a=0$. Then
> $$
> K\otimes\mathbb Q_\ell\cong\mathbb Q_\ell(\mu_N)^{\,\varphi(M)/f},\qquad [\mathbb Q_\ell(\mu_N):\mathbb Q_\ell]=ef.
> $$
> Here the prime-to-$\ell$ part is unramified of degree $f$, while adjoining $\ell$-power roots of unity is totally ramified of degree $e$. The number of factors times $ef$ is $\varphi(N)$.
>
> For the non-Abelian cubic splitting field $K=\mathbb Q(d^{1/3},\mu_3)$ put $L=\mathbb Q_\ell(d^{1/3},\mu_3)$ inside a fixed algebraic closure of $\mathbb Q_\ell$. Then $K\otimes\mathbb Q_\ell\cong L^{\,6/[L:\mathbb Q_\ell]}$. At $\ell\nmid3d$, Exercise 9.1.1 makes this respectively $\mathbb Q_\ell^6$, $(\mathbb Q_\ell^{\mathrm{ur},3})^2$, or $(\mathbb Q_\ell^{\mathrm{ur},2})^3$ in its three cases, where the superscript denotes the unique unramified extension of that degree. The expression with $L$ remains valid at the ramified primes too.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formula:** (9.10), printed p. 382, PDF p. 394, directly checked.
- **Imported inputs for (c):** Local cyclotomic extensions: prime-to-residue-characteristic roots give an unramified extension and prime-power cyclotomic roots give a totally ramified extension. The special cases $M=1$ and $a=0$ are explicitly defined.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
