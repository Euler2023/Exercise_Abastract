---
title: "Exercise LA628: Torsion Lattices in the Prime Hecke Correspondence"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.8, printed p. 178, PDF p. 192"
source_refs:
  - "S7/ch-5/sec-2/ex-8"
created: 2026-10-28
---

# Exercise LA628: Torsion Lattices in the Prime Hecke Correspondence

## Problem Statement

> [!question] Original Exercise 5.2.8
> (a) Show that for each $\tau\in\mathcal H$ and each matrix $\beta_j=\begin{pmatrix}1&j\\0&p\end{pmatrix}$ where $0\leq j<p$, the group $C=\Lambda_{\beta_j(\tau)}$ is $\langle(\tau+j)/p\rangle+\Lambda_\tau$. Show that this group satisfies conditions (5.7). If $p\nmid N$ show that for each $\tau\in\mathcal H$ and the matrix $\beta_\infty=\begin{pmatrix}m&n\\N&p\end{pmatrix}\begin{pmatrix}p&0\\0&1\end{pmatrix}$, the group $C=C_\infty=(N\tau+1)\Lambda_{\beta_\infty(\tau)}$ is $\langle1/p\rangle+\Lambda_\tau$ and this group satisfies conditions (5.7). (A hint for this exercise is at the end of the book.)
>
> (b) How do the subgroups of $E_\tau[5]$ in Figure 5.1 correspond to the matrices $\beta_0,\ldots,\beta_5,\beta_\infty$?
>
> (c) As an alternative to the counting argument in the section, consider any subgroup $C\subset E_\tau$ satisfying (5.7). By the first condition $[E_\tau[p]:C]=p$ and so a basis of $C$ is
> $$
> \beta\begin{bmatrix}\tau/p+\Lambda_\tau\\1/p+\Lambda_\tau\end{bmatrix},
> \qquad\beta\in M_2(\mathbb Z),\quad\det(\beta)=p.
> $$
> Two such matrices $\beta$ and $\beta'$ specify the same group exactly when $\beta'=\gamma\beta$ for some $\gamma\in SL_2(\mathbb Z)$. If $\beta=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ then $\gcd(a,c)$ is $1$ or $p$. Show that repeated left multiplication by elements of $SL_2(\mathbb Z)$ to carry out the Euclidean algorithm on $a$ and $c$ and then further left multiplication if necessary reduce $\beta$ to exactly one of $\beta_0,\ldots,\beta_{p-1},\beta_\infty$.
>
> (d) Show diagram (5.8) commutes by showing that $\psi_1([E/C_j,1/N+C_j])=\Gamma_1(N)\beta_j(\tau)$ for all $j$, including $j=\infty$ when $p\nmid N$.
>
> (e) Show that $[E_\tau/C_\infty,1/N+C_\infty]=[E_{p\tau},p/N+\Lambda_{p\tau}]$ when $p\nmid N$.
>
> **Referenced data.** Here $\Lambda_\tau=\tau\mathbb Z+\mathbb Z$, $E_\tau=\mathbb C/\Lambda_\tau$, and $mp-nN=1$. Conditions (5.7), printed p. 174 / PDF p. 188, are $C\cong\mathbb Z/p\mathbb Z$ in $E_\tau$ and $C\cap(\langle1/N\rangle+\Lambda_\tau)=\{0\}$. The dictionary $\psi_1$ takes $[E_z,1/N+\Lambda_z]$ to $\Gamma_1(N)z$. Diagram (5.8) compares the sum of quotient enhanced curves with the sum of the corresponding modular-curve points.
>
> **Figure 5.1, printed p. 175 / PDF p. 189; direct crop.**
> ![[Attachments/diamond-shurman-ch05-fig-5.1.png]]

> [!warning] Source issue and corrected scope
> Part (b) prints an extra finite index $5$: there are six cyclic subgroups, represented by $\beta_0,\ldots,\beta_4,\beta_\infty$, and $\beta_5$ repeats $\beta_0$. In (a) and (c), the printed lattice and “basis” descriptions refer to lifts of $C$; a finite cyclic subgroup itself has no rank-two integer basis. The solution keeps $L_j$ and $C_j=L_j/\Lambda_\tau$ distinct. The exceptional representative is used only when $p\nmid N$.

## Hints

> [!hint]- Hint 1
> Keep a lifted lattice $L_j\supset\Lambda_\tau$ separate from its finite quotient $C_j=L_j/\Lambda_\tau$.

> [!hint]- Hint 2
> For finite $j$, the relation $\tau=p(\tau+j)/p-j$ proves the lattice equality. For the exceptional representative use a unimodular change of basis at $p\tau$.

> [!hint]- Hint 3
> In (c), perform the Euclidean algorithm on the first column; after it becomes $(g,0)^{\mathsf T}$, reduce the upper right entry modulo $p/g$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $L_j$ for the full inverse image in $\mathbb C$ of a subgroup $C_j\subset E_\tau$. This distinguishes the lattice from its quotient, which the printed shorthand suppresses.
>
> **(a).** For finite $j$, let $w=(\tau+j)/p$. Then $\Lambda_{\beta_j\tau}=w\mathbb Z+\mathbb Z$. It contains $\Lambda_\tau$, since $\tau=pw-j$. Hence
> $$
> L_j=\Lambda_\tau+\mathbb Zw,\qquad C_j=L_j/\Lambda_\tau=\langle w+\Lambda_\tau\rangle.
> $$
> The order of $w$ is exactly $p$: $pw\in\Lambda_\tau$, whereas $kw\in\Lambda_\tau$ with $0<k<p$ would force its $\tau$ coefficient $k/p$ to be an integer. If $kw\equiv l/N\pmod{\Lambda_\tau}$, comparison of the real-linearly independent basis $\tau,1$ again forces $p\mid k$, so the intersection with the marked subgroup is zero.
>
> For $j=\infty$, put $B=\begin{pmatrix}m&n\\N&p\end{pmatrix}\in SL_2(\mathbb Z)$. The change-of-basis identity $(cz+d)\Lambda_{Bz}=\Lambda_z$ gives
> $$
> p(N\tau+1)\Lambda_{B(p\tau)}=\Lambda_{p\tau},
> \qquad L_\infty=(N\tau+1)\Lambda_{\beta_\infty\tau}
> =\tau\mathbb Z+\frac1p\mathbb Z.
> $$
> Thus $C_\infty=\langle1/p+\Lambda_\tau\rangle$ has order $p$. Its intersection with a cyclic group of order $N$ is zero when $p\nmid N$, because the intersection order divides both $p$ and $N$. If $p\mid N$, the point $1/p$ equals $(N/p)(1/N)$, so this exceptional subgroup must instead be excluded.
>
> **(b).** Use coordinates $(a,b)$ on $E_\tau[5]$, meaning $(a\tau+b)/5+\Lambda_\tau$. The five finite matrices correspond to the five lines
> $$
> C_j=\{(k,kj):k\in\mathbb F_5\},\quad j=0,1,2,3,4,
> $$
> and $\beta_\infty$ corresponds to $C_\infty=\{(0,k):k\in\mathbb F_5\}$. In the pictured parallelogram these are the four nonzero points on each line through the origin, with edges identified. The horizontal bottom-edge subgroup is $C_\infty$; the subgroup along the $\tau$ edge is $C_0$. For each remaining line its point with $\tau$ coordinate $1/5$ has horizontal coordinate $j/5$, identifying $C_j$. There are six lines, not seven: the additionally printed $\beta_5$ gives $\langle(\tau+5)/5\rangle=\langle\tau/5\rangle=C_0$.
>
> **(c).** Under $E_\tau[p]\cong\mathbb F_p^2$, a subgroup $C$ of order $p$ is a one-dimensional subspace. Its inverse image $K\subset\mathbb Z^2$ has index $p$ and contains $p\mathbb Z^2$. Choose an oriented integer basis for $K$; the two basis rows give a matrix $\beta$ with determinant $p$. Applying those rows to $(\tau/p,1/p)^{\mathsf T}$ gives a basis for the lifted lattice $L$, whose quotient by $\Lambda_\tau$ is $C$. Two such oriented bases of the same $K$ differ by left multiplication in $SL_2(\mathbb Z)$, establishing the printed equivalence with this precise interpretation of “basis.”
>
> Let $g=\gcd(a,c)>0$. It divides $ad-bc=p$, so $g=1$ or $p$. Bézout's identity constructs a determinant-one integer matrix sending the first column to $(g,0)^{\mathsf T}$. The resulting whole matrix has the form
> $$
> \begin{pmatrix}g&B'\\0&p/g\end{pmatrix}.
> $$
> Left multiplication by $\begin{pmatrix}1&k\\0&1\end{pmatrix}$ changes $B'$ by $k(p/g)$. Reduce to $0\leq B'<p/g$. If $g=1$, this is exactly $\beta_j$, $0\leq j<p$. If $g=p$, it is $\operatorname{diag}(p,1)$, which is left equivalent to the printed $\beta_\infty=B\operatorname{diag}(p,1)$ whenever $p\nmid N$. These possibilities are unique: their reduced lines modulo $p$ are respectively $\langle(1,j)\rangle$ and $\langle(0,1)\rangle$, which are pairwise distinct. When $p\mid N$, condition (5.7) eliminates the last line as proved in (a).
>
> **(d).** The complex group quotient $E_\tau/C_j$ is $\mathbb C/L_j$, with marked point $1/N+L_j$. For finite $j$, $L_j=\Lambda_{\beta_j\tau}$, so its enhanced class is already $[E_{\beta_j\tau},1/N+\Lambda_{\beta_j\tau}]$ and the dictionary gives the required point.
>
> For $j=\infty$, write $\kappa=N\tau+1$. Multiplication by $1/\kappa$ identifies $\mathbb C/L_\infty$ with $E_{\beta_\infty\tau}$. It sends the marking to $1/(N\kappa)$; its difference from $1/N$ is
> $$
> \frac1{N\kappa}-\frac1N=-\frac\tau\kappa\in\Lambda_{\beta_\infty\tau},
> $$
> because $\tau\in L_\infty=\kappa\Lambda_{\beta_\infty\tau}$. Thus the marking becomes the canonical $1/N$, proving the exceptional equality too. Extending these equalities linearly to the sums gives commutativity of (5.8).
>
> **(e).** The equality $L_\infty=\tau\mathbb Z+(1/p)\mathbb Z$ gives $pL_\infty=\Lambda_{p\tau}$. Multiplication by $p$ is therefore an isomorphism $\mathbb C/L_\infty\to E_{p\tau}$ sending $1/N$ to $p/N$. Since $p\nmid N$, that point still has exact order $N$. This is precisely the stated equality of enhanced isomorphism classes.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.8, printed p. 178 / PDF p. 192]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Figure provenance:** Figure 5.1, printed p. 175 / PDF p. 189, is retained as a direct 200 dpi source crop in the existing Attachments directory. Both this separate figure page and the exercise page were inspected.
- **Proof inputs:** The lattice change-of-basis identity is Lemma 1.3.1, printed p. 25 / PDF p. 40; it also follows by comparing the generators $az+b,cz+d$. The marked-torus dictionary is Theorem 1.5.1. The calculations here prove the assigned identifications, normal forms and commutative square independently. The Appendix A hint was checked on printed p. 422 / PDF p. 433.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
