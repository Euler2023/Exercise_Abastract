---
title: "Exercise LA630: Fricke Conjugation and Hecke Adjoints"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.5, Exercise 5.5.1, printed p. 188, PDF p. 202"
source_refs:
  - "S7/ch-5/sec-5/ex-1"
created: 2026-10-28
---

# Exercise LA630: Fricke Conjugation and Hecke Adjoints

## Problem Statement

> [!question] Original Exercise 5.5.1
> (a) Let $\gamma=\begin{pmatrix}0&-1\\N&0\end{pmatrix}$. Establish the normalization formula
> $$
> \gamma^{-1}\begin{pmatrix}a&b\\Nc&d\end{pmatrix}\gamma
> =\begin{pmatrix}d&-c\\-Nb&a\end{pmatrix}.
> $$
> Use this to show that $\gamma^{-1}\Gamma_1(N)\gamma=\Gamma_1(N)$, and so the operator $w_N=[\gamma]_k$ is the double coset operator $[\Gamma_1(N)\gamma\Gamma_1(N)]_k$ on $S_k(\Gamma_1(N))$. Show that $w_N\langle n\rangle w_N^{-1}=\langle n\rangle^*$ for all $n$ such that $(n,N)=1$ and thus for all $n$.
>
> (b) Let $\Gamma_1(N)\begin{pmatrix}1&0\\0&p\end{pmatrix}\Gamma_1(N)=\coprod_j\Gamma_1(N)\beta_j$ be a distinct union, i.e., $T_p=\sum_j[\beta_j]_k$. From part (a), $\gamma\Gamma_1(N)=\Gamma_1(N)\gamma$ and similarly for $\gamma^{-1}$. Use this and the formula $\begin{pmatrix}p&0\\0&1\end{pmatrix}=\gamma^{-1}\begin{pmatrix}1&0\\0&p\end{pmatrix}\gamma$ to find coset representatives for $\Gamma_1(N)\begin{pmatrix}p&0\\0&1\end{pmatrix}\Gamma_1(N)$. Use Proposition 5.5.2 and the coset representatives to show that $T_p^*=w_NT_pw_N^{-1}$, and so $T_n^*=w_NT_nw_N^{-1}$ for all $n$.
>
> (c) Show that $w_N^*=(-1)^kw_N$ and that $i^kw_NT_n$ is self-adjoint. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Multiply the three matrices in (a), and inspect the diagonal residues of a diamond representative.

> [!hint]- Hint 2
> Conjugate every left coset representative $\beta_j$ by $\gamma$. Proposition 5.5.2 replaces a matrix by its adjugate when taking the adjoint.

> [!hint]- Hint 3
> For (c), $\det(\gamma)\gamma^{-1}=-\gamma$. Remember to conjugate the scalar $i^k$ when taking an adjoint.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $Wf=f[\gamma]_k$ and $\Gamma=\Gamma_1(N)$. Composition of operators is the usual right-to-left composition; the slash law is $f[AB]_k=(f[A]_k)[B]_k$.
>
> **(a).** Since $\gamma^{-1}=\begin{pmatrix}0&1/N\\-1&0\end{pmatrix}$, direct multiplication gives the displayed matrix identity. A matrix of $\Gamma$ has $a,d\equiv1\pmod N$ and lower left entry $Nc$. Its conjugate therefore has integral entries, the same diagonal conditions and lower left entry divisible by $N$. The formula is reversible, proving $\gamma^{-1}\Gamma\gamma=\Gamma$. Thus $\Gamma\gamma\Gamma=\Gamma\gamma$ has one left orbit, so its operator is $W$. Its inverse is $f\mapsto f[\gamma^{-1}]_k$.
>
> Let $A=\begin{pmatrix}a&b\\Nc&d\end{pmatrix}\in\Gamma_0(N)$ represent $\langle n\rangle$, so $d\equiv n\pmod N$. Since $ad\equiv1\pmod N$, $a\equiv n^{-1}\pmod N$. Applying the slash composition law to $W\langle n\rangle W^{-1}f$ gives $f[\gamma^{-1}A\gamma]_k$. Its lower right entry is $a$, so this operator is $\langle n^{-1}\rangle$. The diamond adjoint identity $\langle n\rangle^*=\langle n\rangle^{-1}$ follows from Proposition 5.5.2(a), because $A$ has determinant $1$ and normalizes $\Gamma$. If $(n,N)>1$, both $\langle n\rangle$ and its adjoint are zero by definition, giving the remaining cases.
>
> **(b).** Put $A_p=\operatorname{diag}(1,p)$ and $A_p'=\operatorname{diag}(p,1)=\gamma^{-1}A_p\gamma$. Normalization of $\Gamma$ gives the disjoint decomposition
> $$
> \Gamma A_p'\Gamma
> =\coprod_j\Gamma\gamma^{-1}\beta_j\gamma.
> $$
> Disjointness follows by applying the bijective conjugation to the original decomposition. Proposition 5.5.2(b) [S7, printed p. 186 / PDF p. 200] says the operator of this adjugate double coset is $T_p^*$. On the other hand, expanding $WT_pW^{-1}f$ gives $\sum_jf[\gamma^{-1}\beta_j\gamma]_k$, exactly the same sum. Hence $T_p^*=WT_pW^{-1}$.
>
> For prime powers, take adjoints of $T_{p^r}=T_pT_{p^{r-1}}-p^{k-1}\langle p\rangle T_{p^{r-2}}$. Adjoint reverses products, but all the relevant operators commute, and their adjoints commute as well. The scalar $p^{k-1}$ is real. By induction, using (a) and the prime case, the resulting recurrence is $T_{p^r}^*=WT_{p^r}W^{-1}$. Taking products over distinct prime factors gives the identity for every $n$.
>
> **(c).** Proposition 5.5.2(a) applies to $\gamma$, since it normalizes $\Gamma$, and gives $W^*=[\det(\gamma)\gamma^{-1}]_k=[-\gamma]_k$. Changing the sign of a two-by-two matrix leaves its determinant and fractional linear action unchanged, but multiplies $j(\gamma,z)^{-k}$ by $(-1)^k$. Thus $W^*=(-1)^kW$.
>
> Using (b) and the conjugation of scalar coefficients under adjoint,
> $$
> \begin{aligned}
> (i^kWT_n)^*
> &=(-i)^kT_n^*W^*\\
> &=(-i)^k(WT_nW^{-1})(-1)^kW\\
> &=i^kWT_n.
> \end{aligned}
> $$
> Therefore $i^kw_NT_n$ is self-adjoint for every $n$, including indices sharing factors with $N$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.5.1, printed p. 188 / PDF p. 202]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** The adjoint rule in Proposition 5.5.2 was checked on printed p. 186 / PDF p. 200, and the Hecke adjoint theorem on printed p. 187 / PDF p. 201. Appendix A, printed p. 422 / PDF p. 433, points to that proposition for (c).
- **Normalization:** The unnormalized $w_N$ need not square to $I$; its square is $(-1)^kN^{k-2}I$. This follows from $\gamma^2=-NI$ and the source slash rule. The normalized involution in Section 5.10 includes an additional scalar.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
