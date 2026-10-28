---
title: "Exercise Rep164: The Character Decomposition of Modular Form Spaces"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.3, Exercise 4.3.4, printed p. 120, PDF p. 134"
source_refs:
  - "S7/ch-4/sec-3/ex-4"
created: 2026-10-28
---

# Exercise Rep164: The Character Decomposition of Modular Form Spaces

## Problem Statement

> [!question] Original Exercise 4.3.4
> (a) Show that $M_k(\Gamma_1(N))=\bigoplus_\chi M_k(N,\chi)$. (A hint for this exercise is at the end of the book.)
>
> (b) Show the same result for the cusp form spaces $S_k(N,\chi)$.
>
> (c) Show the same result for the Eisenstein spaces $E_k(N,\chi)$.

## Hints

> [!hint]- Hint 1
> The quotient $\Gamma_0(N)/\Gamma_1(N)$ is the finite abelian group of units modulo $N$.

> [!hint]- Hint 2
> Construct projectors by averaging $\overline\chi(d)\langle d\rangle$ and use character orthogonality.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $A=(\mathbb Z/N\mathbb Z)^*$ and $V=M_k(\Gamma_1(N))$. The bottom-right-entry map gives $\Gamma_0(N)/\Gamma_1(N)\simeq A$; it acts on $V$ by the diamond slash operators $D_d=\langle d\rangle$, with $D_dD_e=D_{de}$. Normality of $\Gamma_1(N)$ in $\Gamma_0(N)$ makes the action well defined. For a character $\chi$ set
> $$
> P_\chi=\frac1{|A|}\sum_{d\in A}\overline\chi(d)D_d.
> $$
> Reindexing gives $D_aP_\chi=\chi(a)P_\chi$. Thus its image lies in $V_\chi=M_k(N,\chi)$. If $v\in V_\psi$, orthogonality gives $P_\chi v=\delta_{\chi,\psi}v$. Finally the dual orthogonality relation gives $\sum_\chi P_\chi=D_1=I$. Every $v$ is therefore a sum of vectors in $V_\chi$, and applying each projector to a relation between such vectors shows its components vanish. This proves (a), without a choice of simultaneous eigenbasis.
>
> **(b).** Slash operators by $\Gamma_0(N)$ permute rational cusps and preserve cusp vanishing, so the subspace $W=S_k(\Gamma_1(N))$ is stable under every $D_d$ and hence every $P_\chi$. Repeating the argument restricted to $W$ gives $W=\bigoplus_\chi W_\chi$ with $W_\chi=W\cap V_\chi=S_k(N,\chi)$.
>
> **(c).** In this chapter $E_k(\Gamma_1(N))$ means the quotient $V/W$, not a chosen complement. The decompositions give a natural isomorphism
> $$
> V/W\simeq\bigoplus_\chi(V_\chi/W_\chi)=\bigoplus_\chi E_k(N,\chi).
> $$
> For an explicit kernel check, $\sum_\chi v_\chi\in W$ if and only if $P_\chi(\sum v_\psi)=v_\chi\in W_\chi$ for every $\chi$. This proves injectivity of the quotient direct sum; surjectivity follows from (a). Hence the quotient decomposition is canonical for the character action and needs no premature choice of an Eisenstein subspace.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.3.4, printed p. 120 / PDF p. 134]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The eigenspace definitions and the two displayed decompositions are on printed p.119/PDF p.133. Character orthogonality is proved in Exercise 4.3.1. The use of quotient spaces in (c) matches the source's definition before Chapter 5 replaces them by orthogonal complements.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
