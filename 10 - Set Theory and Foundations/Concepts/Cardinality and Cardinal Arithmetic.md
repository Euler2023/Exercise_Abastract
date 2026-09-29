---
title: Cardinality and Cardinal Arithmetic
aliases:
  - Cardinal Numbers
  - Cardinal Arithmetic
  - Countable Products
  - Schroeder-Bernstein Theorem
  - Cantor-Bernstein Theorem
topic: set-theory
tags:
  - concept
  - definition
  - set-theory
  - cardinality
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, §§1–4, printed pp. 875–893, PDF pp. 890–908"
source_status: verified
status: not-started
---

# Cardinality and Cardinal Arithmetic

## Definition

Two sets have the same **cardinality**, $|A|=|B|$, if there is a bijection between them. Write $|A|\le|B|$ when there is an injection $A\to B$, and $|A|<|B|$ when the inequality holds but equality does not. A set is **denumerable** if it is in bijection with $\mathbb N$; it is **countable** if it is finite or denumerable. We use $\mathbb N=\{0,1,\ldots\}$; switching to the book's $\mathbb Z^+$ changes no cardinalities.

For cardinals $\alpha=|A|$ and $\beta=|B|$, define

$$
\alpha+\beta=|A\sqcup B|,\qquad
\alpha\beta=|A\times B|,\qquad
\beta^\alpha=|B^A|,
$$

where $B^A$ is the set of functions $A\to B$ and $\sqcup$ denotes a disjoint union. Bijections on factors induce bijections on products, disjoint unions, and function sets, so these definitions depend only on the cardinalities.

## Interpretation

An injection shows that one set can be encoded inside another. Infinite sets need not become larger after adding finitely many points or taking finite products. Function sets behave differently: even binary functions produce a strictly larger cardinality by diagonalization. Countable products can also increase an infinite cardinal, so finite-product rules must not be applied to them without proof.

## Comparison and Choice

**Schroeder–Bernstein.** Injections $f:A\to B$ and $g:B\to A$ imply $|A|=|B|$. To prove this, set $A_0=A\setminus g(B)$, $A_{n+1}=g(f(A_n))$, and $C=\bigcup_{n\ge0}A_n$. Define $h(a)=f(a)$ on $C$ and $h(a)=g^{-1}(a)$ outside $C$. The latter is defined because $A_0\subseteq C$. Both restrictions are injective. Their images are disjoint: $f(c)=g^{-1}(a)$ would give $a=g(f(c))\in C$. They exhaust $B$: if $b\notin f(C)$, then $g(b)\notin C$, since it is neither in $A_0$ nor in $g(f(C))$, and $h(g(b))=b$. Thus $h$ is a bijection. This theorem needs no choice.

The unrestricted arithmetic below uses the axiom of choice in its equivalent Zorn-lemma form, as does Lang. In particular arbitrary cardinals are comparable, every infinite set contains a denumerable subset, and families of required bijections can be chosen simultaneously. A maximal partial injection proves comparability: order injections $f:C\to B$, $C\subseteq A$, by extension. Chain unions are upper bounds. A maximal one either has domain $A$ or has image $B$, since otherwise one more pair can be added.

## Infinite Sums and Finite Products

For every infinite set $A$,

$$
|A\times\mathbb N|=|A|,\qquad |A\times A|=|A|,\qquad |A^n|=|A|\quad(n\ge1).
$$

Here are proofs following the structure of the source while making the choices explicit. A maximal disjoint family of denumerable subsets of $A$ leaves only finitely many points: an infinite complement would contain another denumerable subset. Absorb a finite remainder into one of the denumerable pieces. Pairing $\mathbb N\times\mathbb N$ with $\mathbb N$ on each piece gives $|A\times\mathbb N|=|A|$. Such a pairing exists, for example by enumerating pairs in order of the sum of their coordinates. It follows by Schroeder–Bernstein that $|A\times F|=|A|$ for any finite nonempty $F$, and that $|A\sqcup B|=|A|$ whenever $|B|\le|A|$.

For the square, order pairs $(B,f)$ with $B\subseteq A$ infinite and $f:B\to B\times B$ a bijection, by simultaneous extension of domain and map. The set is nonempty using a denumerable subset; chain unions are again such pairs. Let $(M,g)$ be maximal and let $C=A\setminus M$. If $|C|\le|M|$, the preceding sum rule gives $|A|=|M|$ and the result follows. Otherwise comparison gives an injection $M\to C$, whose image is a subset $M_1$ of cardinality $|M|$. The complement of $M\times M$ in $(M\cup M_1)^2$ is the disjoint union of three sets, each of cardinality $|M|$ because $|M^2|=|M|$. It thus has cardinality $|M|=|M_1|$. A bijection from $M_1$ onto that complement extends $g$, contradicting maximality. This proves the square formula. Induction proves the finite-power formula.

Consequently a countable union of sets of cardinality at most an infinite $\kappa$ has cardinality at most $\kappa$: choose injections into a fixed set $A$ of size $\kappa$, tag an element by the first index at which it appears, and inject the union into $\mathbb N\times A$.

## Function Sets and Countable Products

Restriction and pairing of functions give actual bijections, valid also for finite sets:

$$
A^{B\sqcup C}\cong A^B\times A^C,\qquad
(A^B)^C\cong A^{B\times C}.
$$

Thus $\alpha^{\beta+\gamma}=\alpha^\beta\alpha^\gamma$ and $(\alpha^\beta)^\gamma=\alpha^{\beta\gamma}$. In particular

$$
(A^{\mathbb N})^{\mathbb N}\cong A^{\mathbb N\times\mathbb N}\cong A^{\mathbb N}.
$$

The power set $\mathcal P(A)$ is in bijection with $\{0,1\}^A$ by characteristic functions. It is strictly larger than $A$: singletons give an injection, while for any map $f:A\to\mathcal P(A)$ the diagonal set $D=\{a:a\notin f(a)\}$ is outside its image.

## Examples and Boundaries

- Finite sequences in an infinite set $A$, and finite subsets of $A$, each form a set of cardinality $|A|$.
- The continuum $\mathfrak c=|\mathbb R|$ equals $2^{\aleph_0}=|\mathbb N^{\mathbb N}|$; the linked exercise solutions give explicit encodings.
- Countable iteration is idempotent, $(\kappa^{\aleph_0})^{\aleph_0}=\kappa^{\aleph_0}$, but need not equal $\kappa$. A partition and diagonal argument in the exercise on iterated products gives a counterexample larger than the continuum.
- The finite-product identity excludes $n=0$: $A^0$ is a singleton.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Partially Ordered Sets and Zorns Lemma]]
- [[03 - Field Theory/Concepts/Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure]]

## Exercises

```dataview
TABLE difficulty, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Appendix 2 was visually checked in full, printed pp. 875–893 / PDF pp. 890–908. The central inputs are Theorem 3.1, printed pp. 885–886 / PDF pp. 900–901; Theorem 3.3, printed p. 887 / PDF p. 902; Theorem 3.6 and Corollary 3.7, printed pp. 888–889 / PDF pp. 903–904; and Theorem 3.10 and Corollary 3.11, printed pp. 890–891 / PDF pp. 905–906. The proofs above are independent expanded derivations. Choice is an explicit foundational assumption, not a consequence of Schroeder–Bernstein.
