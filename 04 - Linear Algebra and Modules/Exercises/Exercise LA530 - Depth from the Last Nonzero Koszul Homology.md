---
title: "Exercise LA530: Depth from the Last Nonzero Koszul Homology"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XXI, Exercise 4, printed pp. 864–865, PDF pp. 879–880"
created: 2026-09-29
---

# Exercise LA530: Depth from the Last Nonzero Koszul Homology

## Problem Statement

> [!question] Lang, Ch. XXI, Exercise 4
> For exercises 1 through 4 on the Koszul complex, see [No 68], Chapter 8.
>
> Again assume $A$ and $M$ Noetherian. Let $I=(x_1,\ldots,x_r)$ and let $a_1,\ldots,a_q$ be a maximal $M$-regular sequence in $I$. Assume $IM\ne M$. Prove that
>
> $$
> H_{r-q}(x;M)\ne0\quad\text{but}\quad H_p(x;M)=0\text{ for }p>r-q.
> $$
>
> [See [No 68], 8.5 Theorem 6. The result is similar to the result in Exercise 5, and generalizes Theorem 4.5(a). See also [Mat 80], pp. 100–103. The result shows that all maximal $M$-regular sequences in $M$ have the same length, which is called the $I$-depth of $M$ and is denoted by $\operatorname{depth}_I(M)$. For the proof, let $s$ be the maximal integer such that $H_sK(x;M)\ne0$. By assumption, $H_0(x;M)=M/IM\ne0$, so $s$ exists. We have to prove that $q+s=r$. First note that if $q=0$ then $s=r$. Indeed, if $q=0$ then every element of $I$ is zero divisor in $M$, whence $I$ is contained in the union of the associated primes of $M$, whence in some associated prime of $M$. Hence $H_r(x;M)\ne0$.
>
> Next assume $q>0$ and proceed by induction. Consider the exact sequence
>
> $$
> 0\to M\xrightarrow{a_1}M\to M/a_1M\to0
> $$
>
> where the first map is $m(a_1)$. Since $I$ annihilates $H_p(x;M)$ by Theorem 4.5(c), we get an exact sequence
>
> $$
> 0\to H_p(x;M)\to H_p(x;M/a_1M)\to H_{p-1}(x;M)\to0.
> $$
>
> Hence $H_{s+1}(x;M/a_1M)\ne0$, but $H_p(x;M/a_1M)=0$ for $p\ge s+2$. From the hypothesis that $a_1,\ldots,a_q$ is a maximal $M$-regular sequence, it follows at once that $a_2,\ldots,a_q$ is maximal $M/a_1M$-regular in $I$, so by induction, $q-1=r-(s+1)$ and hence $q+s=r$, as was to be shown.]

> [!warning] Source issue
> The hint says regular sequences “in $M$”; their elements are in the ideal $I\subseteq A$. Its reference to Theorem 4.5(c) for annihilation is misnumbered: the required assertion is 4.5(b), printed p. 856 / PDF p. 871. Part (c) is the consequence when $I=A$.

## Hints

> [!hint]- Hint 1: Start with length zero
> Use the finite associated-prime description of zero divisors and prime avoidance. If $I\subseteq\operatorname{ann}(m)$ for $m\ne0$, then top Koszul homology is nonzero.

> [!hint]- Hint 2: Compare the last nonzero degrees
> For regular $a_1\in I$, use $0\to M\xrightarrow{a_1}M\to M/a_1M\to0$. Multiplication by $a_1$ is zero on all Koszul homology, so its long exact sequence breaks into short exact sequences.

## Solution

> [!success]- Complete independent derivation
> Put $H_p(M)=H_pK(x;M)$, zero outside $0\le p\le r$. Since $H_0(M)=M/IM\ne0$, there is a greatest nonzero degree $s$. We prove $q+s=r$ by induction on $q$.
>
> If $q=0$, every $a\in I$ satisfies $aM\subseteq IM\ne M$. Were $a$ injective on $M$, it would give a one-term regular sequence, contradicting maximality. Therefore every element of $I$ is a zero divisor on $M$. The finite associated-prime lemma and prime avoidance, proved in the linked Koszul concept, imply $I\subseteq\mathfrak p=\operatorname{ann}(m)$ for some $m\ne0$. The top differential then gives
>
> $$
> H_r(M)=\{v\in M:Iv=0\}\ne0,
> $$
>
> so $s=r$.
>
> For $q>0$, set $a=a_1$ and $Q=M/aM$. The sequence $0\to M\xrightarrow{a}M\to Q\to0$ is exact. Exterior multiplication by $e_i$ gives a homotopy between multiplication by $x_i$ and zero on $K(x;M)$. Hence every element of $I$, and in particular $a$, acts as zero on its homology. The long exact sequence from Exercise 1 therefore yields
>
> $$
> 0\to H_p(M)\to H_p(Q)\to H_{p-1}(M)\to0
> $$
>
> for every $p$. It follows that $H_{s+1}(Q)\cong H_s(M)\ne0$, whereas $H_p(Q)=0$ for $p\ge s+2$. In particular $s+1\le r$.
>
> The quotient $Q$ is Noetherian and $Q/IQ\cong M/IM\ne0$. Its sequence $a_2,\ldots,a_q$ is regular and maximal in $I$, since any extension would extend the original sequence. Induction on this sequence gives
>
> $$
> (q-1)+(s+1)=r.
> $$
>
> Thus $s=r-q$, proving exactly the stated vanishing and nonvanishing. It also proves $q\le r$ and equality of lengths of all maximal sequences in $I$, independently of any Ext characterization of depth.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Koszul Complexes and Regular Sequences]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA527 - Exact Sequences in Koszul Homology]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA529 - Maximal Regular Sequences in a Noetherian Module]]

## Notes

Statement and full printed hint checked at printed pp. 864–865 / PDF pp. 879–880. The solution independently expands the printed route. Associated primes and prime avoidance are proved in the linked concept; neither the external Northcott and Matsumura references nor Exercise 5 are assumed.
