---
title: 'Exercise AG31: Continuous Extensions of the Local Logarithm and Exponential'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 1, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-1
created: '2026-10-23'
---

# Exercise AG31: Continuous Extensions of the Local Logarithm and Exponential

## Problem Statement

> [!question] Neukirch II.5.1
> The logarithm function can be continued to a continuous homomorphism
> $$
> \log:\overline{\mathbb Q}_p^*\longrightarrow\mathbb Q,
> $$
> and the exponential function to a continuous homomorphism
> $$
> \exp:\overline{\mathfrak p}^{\,1/(1-p)}\longrightarrow\overline{\mathbb Q}_p^*,
> $$
> where $\overline{\mathfrak p}^{\,1/(1-p)}=\{x\in\overline{\mathbb Q}_p\mid v_p(x)>1/(1-p)\}$ and $v_p$ is the unique extension of the normalized valuation on $\mathbb Q_p$.

> [!warning] Source issue and analytic boundary
> The printed logarithm target is the bare $\mathbb Q$ (no subscript $p$). The logarithm series already takes irrational $p$-adic values on $\mathbb Q_p$, so this target cannot hold; the canonical algebraic extension takes values in $\overline{\mathbb Q}_p$. The printed exponential domain has the negative bound $1/(1-p)$. It is retained: a **continuous group-homomorphism extension** to that domain exists noncanonically, although the exponential power series does not converge there. Failure of power-series convergence is not a counterexample to the printed continuation assertion.

## Hints

> [!hint]- Hint 1
> Evaluate the convergent series in a finite complete subfield. For logarithm choose powers and impose $\log p=0$.

> [!hint]- Hint 2
> The target $V^*$ is divisible. Extend exponential successively from $B_n$ to $p^{-1}B_n$, choosing roots for a basis of the quotient.

## Solution

> [!success]- Independent derivation
> Write $V=\overline{\mathbb Q}_p$ and
> $$
> B=\{x\in V:v_p(x)>1/(p-1)\}.
> $$
> For $x$ in a finite extension $F/\mathbb Q_p$, the terms satisfy
> $$
> v_p(x^n/n!)\ge n(v_p(x)-1/(p-1))\longrightarrow+\infty
> $$
> when $x\in B$. Thus the exponential series defines $e_0:B\to V^*$; its value lies in the finite complete field containing $x$. Likewise $\log(1+z)=\sum_{n\ge1}(-1)^{n+1}z^n/n$ converges whenever $v_p(z)>0$, since $nv_p(z)-v_p(n)\to+\infty$. Convergent formal identities, evaluated in a common finite extension, show that these are continuous homomorphisms and that logarithm and exponential are inverse on the smaller discs of bound $1/(p-1)$.
>
> **Canonical extension of the logarithm.** For $a\in V^*$ choose $N\ge1$ such that $m=Nv_p(a)$ is an integer and $u=a^Np^{-m}$ is a principal unit; after clearing the value denominator, multiplication of $N$ by the finite residue-field unit order achieves the second requirement. Set
> $$
> \log a=N^{-1}\log u,\qquad \log p=0.
> $$
> For another choice $(M,n)$, $mM=nN$ and $u^M=(a^Mp^{-n})^N$, so the homomorphism identity for principal units makes the definitions equal. A common exponent proves $\log(ab)=\log a+\log b$. On an open neighborhood of $1$ this is the convergent series, hence it is continuous everywhere by translation. It takes values in $V$ because each evaluation occurs in a finite subfield.
>
> The printed target $\mathbb Q$ is impossible already on the original field: the inverse logarithm/exponential isomorphism maps a sufficiently small open subgroup of $\mathbb Q_p^*$ onto an open additive ball in $\mathbb Q_p$. That ball is uncountable, whereas $\mathbb Q$ is countable. In fact values need not lie even in $\mathbb Q_p$: in a quadratic extension choose a nonzero trace-zero $\alpha$, and choose $r$ large so that $1\pm p^r\alpha$ lie in the injectivity disc. A rational $p$-adic value of $\log(1+p^r\alpha)$ would be fixed by conjugation and equal $\log(1-p^r\alpha)$, contradicting injectivity.
>
> **Continuous extension of the exponential to the printed domain.** We prove a stronger existence statement, extending $e_0$ to a group homomorphism $e:V\to V^*$. Put $B_n=p^{-n}B$. Then $B_n\subseteq B_{n+1}$, their union is $V$, and $B_{n+1}/B_n$ is a vector space over $\mathbb F_p$. Suppose $e_n:B_n\to V^*$ has been constructed, starting with $e_0$. Choose a basis of $B_{n+1}/B_n$ and representatives $y_i\in B_{n+1}$. For each $i$, choose $r_i\in V^*$ with
> $$
> r_i^p=e_n(p y_i),
> $$
> which exists because $V$ is algebraically closed. Every element of $B_{n+1}$ has a unique expression $b+\sum_i m_i y_i$, where $b\in B_n$, only finitely many $m_i$ are nonzero, and $0\le m_i<p$. Define
> $$
> e_{n+1}\left(b+\sum_i m_i y_i\right)=e_n(b)\prod_i r_i^{m_i}.
> $$
> This is well-defined by uniqueness of the expression. Addition creates only carries $p y_i$; the displayed root identity makes their two evaluations equal, so $e_{n+1}$ is a homomorphism extending $e_n$. Induction and union give $e:V\to V^*$.
>
> The subgroup $B$ is open in $V$ and $e|_B=e_0$ is continuous. Continuity at $0$ follows by using neighborhoods inside $B$, and the homomorphism law gives continuity everywhere. Restrict $e$ to the printed additive subgroup $\{v_p(x)>1/(1-p)\}$ to obtain exactly the requested continuous exponential continuation. This continuation depends on the chosen bases and roots; no power-series formula outside $B$ is claimed. For example $x=1$ lies in the printed domain while $\sum1/n!$ diverges, illustrating the analytic boundary without disproving the continuous extension.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian groups]]

## Notes

Original exercise: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 1, printed p. 142, PDF p. 161], inspected at 200 dpi and enlarged for the bare printed logarithm target. Independent derivation. The construction of the exponential extension is a direct divisible-group argument; it uses choice of vector-space bases and algebraic roots, without claiming a canonical analytic extension. Finite-extension completeness is II (4.8), printed p. 131/PDF p. 150; the initial logarithm and exponential series and their local inverse identities are II (5.4)–(5.5), printed pp. 136–139/PDF pp. 155–158.
