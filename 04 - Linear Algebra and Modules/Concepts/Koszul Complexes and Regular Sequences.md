---
title: Koszul Complexes and Regular Sequences
aliases:
  - Koszul Complex
  - Regular Sequence
  - Koszul Homology
  - Ideal Depth
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - homological-algebra
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, §4, printed pp. 850–856, PDF pp. 865–871; Exercises 1–5, printed pp. 864–866, PDF pp. 879–881"
source_status: verified
status: not-started
---

# Koszul Complexes and Regular Sequences

## Definition

Let $A$ be a commutative unital ring, $M$ an $A$-module, and $x=(x_1,\ldots,x_r)$. For $E=\bigoplus_{i=1}^rAe_i$, the **Koszul complex** is

$$
K_p(x;M)=\bigwedge^p E\otimes_A M,\qquad
d(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes m)
=\sum_{j=1}^p(-1)^{j-1}e_{i_1}\wedge\cdots\widehat{e_{i_j}}\cdots\wedge e_{i_p}\otimes x_{i_j}m.
$$

It vanishes outside $0\le p\le r$. Terms obtained by deleting two factors cancel in opposite orders, so $d^2=0$. Write $H_p(x;M)=H_pK(x;M)$ and $K(x)=K(x;A)$.

A sequence $a_1,\ldots,a_q$ is **$M$-regular** if $M/(a_1,\ldots,a_q)M\ne0$ and multiplication by $a_i$ is injective on $M/(a_1,\ldots,a_{i-1})M$ for every $i$. The empty sequence is regular precisely when $M\ne0$. The nonzero final quotient is part of Lang's definition.

## Interpretation

The elements $x_i$ give a presentation of $M/(x)M$. Wedge powers record relations among those relations. Positive Koszul homology measures failure to behave like successive non-zero-divisors. Regularity concerns the order of a sequence; Koszul homology is unchanged up to isomorphism by permuting its generators.

## Key Properties

For $I=(x_1,\ldots,x_r)$,

$$
H_0(x;M)=M/IM,\qquad H_r(x;M)=\{m\in M:Im=0\}.
$$

Left exterior multiplication $h_i(u)=e_i\wedge u$ satisfies $dh_i+h_id=x_i\operatorname{id}$: the differential is an antiderivation and $d(e_i)=x_i$. Thus $I$ annihilates every $H_p(x;M)$, including $p=0$. If $I=A$, the identity is homotopic to zero and all homology vanishes. These are Theorem 4.5(b),(c), printed p. 856 / PDF p. 871.

For $C=K(x_1,\ldots,x_{r-1};M)$, separate the terms that contain $e_r$:

$$
K_p(x;M)=C_p\oplus C_{p-1},\qquad
d(v,w)=(dv+(-1)^{p-1}x_rw,dw).
$$

The resulting short exact sequence with subcomplex $C$ and quotient its degree shift gives a long exact homology sequence; its maps $H_p(C)\to H_p(C)$ are multiplication by $(-1)^px_r$. Induction proves that an $M$-regular sequence has $H_p(x;M)=0$ for $p>0$: use inductive vanishing above degree one, and injectivity of $x_r$ on $H_0(C)$ in degree one. In particular an $A$-regular sequence gives a finite free resolution of $A/I$.

For $A,M$ Noetherian and $IM\ne M$, every maximal $M$-regular sequence in $I$ has the same finite length, denoted $\operatorname{depth}_I M$. If $I$ has $r$ chosen generators and $s$ is the greatest index with $H_s(x;M)\ne0$, then

$$
\operatorname{depth}_I M=r-s.
$$

This equality is an exercise conclusion, independently proved in the linked exercises, not a definition used to prove them. The Ext characterization of depth is also proved independently there.

## Noetherian Lemma Used in the Depth Proofs

An **associated prime** of $M$ is a prime ideal $\operatorname{ann}(m)$ for some $m\ne0$. If $A$ is Noetherian and $M$ is finite, the associated primes form a finite set and

$$
\{a\in A:a\text{ is a zero divisor on }M\}
=\bigcup_{\mathfrak p\in\operatorname{Ass}(M)}\mathfrak p.
$$

Here are elementary proofs of the needed facts. A maximal annihilator of a nonzero element is prime: if $abm=0$ and $bm\ne0$, maximality gives $\operatorname{ann}(bm)=\operatorname{ann}(m)$, hence $a\in\operatorname{ann}(m)$. Such maximal annihilators exist by the ascending chain condition on ideals. Every nonzero Noetherian quotient therefore contains $A/\mathfrak p$ as a submodule. Repeatedly lifting these submodules gives a finite prime filtration of $M$, because otherwise its submodules would form an infinite strictly increasing chain.

In $0\to U\to V\to W\to0$, an embedded $A/\mathfrak p\subseteq V$ either meets $U$ nontrivially or injects into $W$. In the first case any nonzero element of the intersection has annihilator $\mathfrak p$, since $A/\mathfrak p$ is a domain. Therefore $\operatorname{Ass}(V)\subseteq\operatorname{Ass}(U)\cup\operatorname{Ass}(W)$, and the filtration proves finiteness. If $a$ kills a nonzero element, choose an annihilator maximal among nonzero elements killed by $a$. The same argument makes it prime and containing $a$. Conversely, membership in an associated prime exhibits a nonzero element killed by $a$.

We also use **finite prime avoidance**: an ideal contained in a finite union of primes is contained in one of them. Delete primes contained in another listed prime. If an ideal $J$ avoids each remaining prime $\mathfrak p_i$, choose $b_i\in J\setminus\mathfrak p_i$ and $c_{ij}\in\mathfrak p_j\setminus\mathfrak p_i$ for $j\ne i$. Then

$$
\sum_i b_i\prod_{j\ne i}c_{ij}\in J
$$

belongs to none of these primes: modulo $\mathfrak p_i$, only the $i$th summand survives and is nonzero. This proves the assertion, including the one-prime case with an empty product.

## Examples

- For one element $a$, $K(a;M)$ is $0\to M\xrightarrow{a}M\to0$, so $H_1=\ker(a)$ and $H_0=M/aM$.
- In $A=k[t_1,\ldots,t_r]$, the variables are an $A$-regular sequence. The Koszul complex resolves $k$.
- In $A=k[t]/(t^2)$, $H_1(t;A)=(t)\ne0$, so $t$ is not regular.
- A unit produces an acyclic Koszul complex but fails the nonzero-quotient requirement for a regular one-term sequence.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers]]

## Exercises

```dataview
TABLE difficulty, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The regular-sequence definition was checked at printed pp. 850–851 / PDF pp. 865–866, the differential at printed p. 852 / PDF p. 867, and the homotopy and exact-sequence results at printed pp. 855–856 / PDF pp. 870–871. The proofs and Noetherian lemma above are independent derivations. The depth and Ext equivalences are proved in the linked exercise solutions. Source slips in the exercise statements and hints are recorded in those notes.
