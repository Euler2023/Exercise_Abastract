---
title: "Exercise G354: Repeated and Nonelliptic Orbit Candidates"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.6, printed p. 56, PDF p. 71; Corollary 2.3.5 and proof, printed p. 56, PDF p. 71"
source_refs:
  - "S7/ch-2/sec-3/ex-6"
created: 2026-10-28
---

# Exercise G354: Repeated and Nonelliptic Orbit Candidates

## Problem Statement

> [!question] Original Exercise 2.3.6
> In the proof of Corollary 2.3.5, need the $2d$ points in $Y(\Gamma)$ listed in the description of $E_\Gamma$ be distinct? Need the points of $E_\Gamma$ all be elliptic points of $\Gamma$?
>
> **Referenced context.** Let $\Gamma$ be a congruence subgroup of $G=SL_2(\mathbb Z)$, let $d=[G:\Gamma]$, and choose right-coset representatives with
> $$
> G=\bigcup_{j=1}^{d}\Gamma\gamma_j.
> $$
> Put $\rho=\mu_3=e^{2\pi i/3}$ and $Y(\Gamma)=\Gamma\backslash\mathcal H$, where $\mathcal H$ is the upper half-plane. The proof defines
> $$
> E_\Gamma=
> \{\Gamma\gamma_j(i),\ \Gamma\gamma_j(\rho):1\le j\le d\}.
> $$
> Corollary 2.3.5 states that $Y(\Gamma)$ has finitely many elliptic points and that each elliptic stabilizer is finite cyclic. Its proof shows that the elliptic points form a subset of $E_\Gamma$. Here an elliptic point has a stabilizer containing a matrix outside the trivially acting subgroup $\{\pm I\}$.

## Hints

> [!hint]- Hint 1
> Different cosets can send a point with a nontrivial stabilizer to the same point. Test the representatives $I$ and $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ at $i$.

> [!hint]- Hint 2
> Choose $\Gamma=\Gamma(2)$. Reduction modulo $2$ separates $I$ and $S$ into different cosets, although $S(i)=i$. Use the determinant to show that $\Gamma(2)$ has no nontrivial fixing transformation.

> [!hint]- Hint 3
> If $\gamma=I+2A$ fixes a point nontrivially, the trace bound gives $\operatorname{tr}\gamma=0$. But $\det(I+2A)=1$ would force $4\det A=2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent counterexamples to both necessity questions, using the single subgroup $\Gamma(2)$.
>
> Both answers are **no**. Let
> $$
> \Gamma=\Gamma(2)=\ker\bigl(SL_2(\mathbb Z)\longrightarrow SL_2(\mathbb F_2)\bigr),
> $$
> and write
> $$
> S=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
> T=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
> $$
> There are six matrices in $SL_2(\mathbb F_2)$: its first column has three nonzero choices, and for each one its determinant equals $1$ for exactly two choices of the second column. The reductions of
> $$
> I,\ T,\ S,\ ST,\ TS,\ STS
> $$
> are respectively
> $$
> \begin{pmatrix}1&0\\0&1\end{pmatrix},
> \begin{pmatrix}1&1\\0&1\end{pmatrix},
> \begin{pmatrix}0&1\\1&0\end{pmatrix},
> \begin{pmatrix}0&1\\1&1\end{pmatrix},
> \begin{pmatrix}1&1\\1&0\end{pmatrix},
> \begin{pmatrix}1&0\\1&1\end{pmatrix}.
> $$
> These are all distinct. Thus reduction is surjective and the six displayed integral matrices form a full system of right-coset representatives, with $d=6$.
>
> **The $2d$ listed entries need not be distinct.** The cosets $\Gamma I$ and $\Gamma S$ differ, but
> $$
> I(i)=i=S(i).
> $$
> Consequently their two $i$-entries in the list defining $E_\Gamma$ coincide even before passing to the quotient. There is also a second explicit repetition:
> $$
> ST(\rho)=-\frac1{\rho+1}=\rho=I(\rho),
> $$
> using $\rho^2+\rho+1=0$, although $\Gamma ST\ne\Gamma I$.
>
> **The candidates need not be elliptic for $\Gamma$.** We show that $\Gamma(2)$ has no elliptic points at all. Suppose $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma(2)$ fixes $\tau\in\mathcal H$ and is not $\pm I$. If $c=0$, its fixed-point equation forces $d=a,b=0$, and the determinant then forces $\gamma=\pm I$, a contradiction. Thus $c\ne0$ and $\tau$ is a nonreal root of
> $$
> c\tau^2+(d-a)\tau-b=0.
> $$
> Its discriminant is negative:
> $$
> (d-a)^2+4bc=(a+d)^2-4<0.
> $$
> Therefore $t=\operatorname{tr}\gamma\in\{-1,0,1\}$. Since $\gamma\equiv I\pmod2$, its trace is even, so $t=0$.
>
> Write $\gamma=I+2A$ with $A$ integral. The trace equation gives $\operatorname{tr}A=-1$, whereas
> $$
> 1=\det(I+2A)=1+2\operatorname{tr}A+4\det A
> $$
> would give $4\det A=2$. This is impossible for an integer determinant.
>
> The set $E_\Gamma$ is nonempty, for example it contains $\Gamma i$, but no one of its elements is elliptic for $\Gamma(2)$. This proves the second answer. A point fixed nontrivially by a matrix of $G$ need not retain such a fixing matrix inside the smaller subgroup $\Gamma$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete two-question exercise, Corollary 2.3.5, and its definition of $E_\Gamma$ were checked on printed p. 56 / PDF p. 71.
- **Proof status:** The coset calculation, repetitions, and trace obstruction above are independent derivations. They do not assume the torsion-freeness requested later in Exercise 2.3.7.
- **Counting boundary:** The notation $E_\Gamma$ denotes a set, whereas its description supplies $2d$ entries with possible repetitions. The containment of the elliptic locus gives an upper bound, not an exact count and not an equality of sets.
- **Routing:** The issue is how coset representatives, orbits, and stabilizers interact under passage to a subgroup; the matrix calculation certifies the counterexample.
- **Learning status:** The status remains not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
