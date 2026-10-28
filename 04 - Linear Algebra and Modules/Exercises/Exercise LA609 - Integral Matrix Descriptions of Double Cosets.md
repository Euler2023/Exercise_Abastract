---
title: "Exercise LA609: Integral Matrix Descriptions of Double Cosets"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.8, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-8"
created: 2026-10-28
---

# Exercise LA609: Integral Matrix Descriptions of Double Cosets

## Problem Statement

> [!question] Original Exercise 3.8.8
> (a) Supply details as necessary to the proof of(3.16) in the section.
>
> (b) Analogously to(3.16), describe the double coset $\Gamma_0(N)\begin{pmatrix}1&0\\0&p\end{pmatrix}\Gamma_0(N)$ as a subset of $M_2(\mathbb Z)$.
>
> Here $p$ is prime. Formula(3.16) is
> $$
> \Gamma_1(N)\begin{pmatrix}1&0\\0&p\end{pmatrix}\Gamma_1(N)=\{\gamma\in M_2(\mathbb Z):\gamma\equiv\begin{pmatrix}1&*\\0&p\end{pmatrix}\pmod N,\ \det\gamma=p\}.
> $$

## Hints

> [!hint]- Hint 1
> Use Smith normal form on $\gamma L_0$, where $L_0=\mathbb Ze_1+N\mathbb Ze_2$. The quotient is cyclic of order $Np$.

> [!hint]- Hint 2
> First factor with two $\Gamma_0(N)$ matrices; then adjust the first matrix into $\Gamma_1(N)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $A=\operatorname{diag}(1,p)$, $L=\mathbb Z^2$, and $L_0=\mathbb Ze_1+N\mathbb Ze_2$. We first prove the more general statement needed for(b):
> $$
> \Gamma_0(N)A\Gamma_0(N)=\{\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in M_2(\mathbb Z):\det\gamma=p,\ N\mid c,\ \gcd(a,N)=1\}.
> $$
> The forward inclusion follows by multiplication modulo $N$: the top-left entries of both determinant-one triangular factors are units. For the reverse, $\gamma L_0\subset L_0$ and $[L:\gamma L_0]=Np$. Smith normal form supplies an oriented basis $(u,v)$ of $L$ with $\gamma L_0=mu\mathbb Z+nv\mathbb Z$, $m\mid n$, $mn=Np$. The integer $m$ divides both coordinates of $\gamma e_1$, so $\gcd(m,N)=1$ because $\gcd(a,N)=1$. As $m^2\mid Np$ and $p$ is prime, this forces $m=1$, $n=Np$.
>
> The cyclic quotient $L/\gamma L_0$ has a unique subgroup of every allowable order. Since $[L:L_0]=N$ and $[L:\gamma L]=p$, its corresponding intermediate lattices must be $L_0=u\mathbb Z+Nv\mathbb Z$ and $\gamma L=u\mathbb Z+pv\mathbb Z$. Let $\gamma_1=[u\ v]\in\operatorname{SL}_2(\mathbb Z)$; $u\in L_0$ gives $\gamma_1\in\Gamma_0(N)$. Write $\gamma=\gamma_1A\gamma_2$. If $\gamma_2=\begin{pmatrix}r&s\\t&w\end{pmatrix}$ initially has rational entries, $\gamma e_1\in\gamma L_0$ gives $r\in\mathbb Z$, $t\in N\mathbb Z$, and $\gamma e_2\in\gamma L$ gives $s,w\in\mathbb Z$. Its determinant is one. Thus $\gamma_2\in\Gamma_0(N)$, proving(b).
>
> For(a), suppose additionally $a\equiv1\pmod N$, as on the right side of(3.16); the bottom-right congruence follows from the displayed condition. We need to adjust the factorization so $\gamma_1\in\Gamma_1(N)$. Every left coset of $\Gamma_1(N)$ in $\Gamma_0(N)$ has a representative $B=\begin{pmatrix}r&k\\N&s\end{pmatrix}$ with $rs-kN=1$, by choosing $s$ a unit lift and solving the determinant equation. It suffices to find $\delta'\in\Gamma_1(N)$ with $A^{-1}\delta'BA\in\Gamma_0(N)$.
>
> If $p\mid N$, take $\delta'=\begin{pmatrix}sN+1&-1\\-sN&1\end{pmatrix}$. Its determinant is one and its diagonal residues are one. The bottom-left entry of $\delta'B$ is $N(1-sr)=-kN^2$, divisible by $pN$. If $p\nmid N$, choose $s'\equiv1\pmod N$, $s'\equiv-r\pmod p$ by the Chinese remainder theorem, and complete the primitive bottom row $(N,s')$ to a determinant-one matrix $\delta'$. This matrix lies in $\Gamma_1(N)$ and the bottom-left entry of $\delta'B$ is $N(r+s')$, again divisible by $pN$. In either case conjugation by $A$ leaves integral entries and makes that entry divisible by $N$. This proves $\Gamma_0(N)A\Gamma_0(N)=\Gamma_1(N)A\Gamma_0(N)$.
>
> We may therefore arrange $\gamma_1\in\Gamma_1(N)$. The top-left congruence in $\gamma=\gamma_1A\gamma_2$ now gives $(\gamma_2)_{11}\equiv1\pmod N$; its determinant and lower-left congruence then give $(\gamma_2)_{22}\equiv1\pmod N$. Hence $\gamma_2\in\Gamma_1(N)$. The reverse inclusion in(3.16) follows directly by multiplication modulo $N$, completing(a).

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
